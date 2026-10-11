'use client';

import { useSyncExternalStore } from 'react';
import { UserProgress, SkillType } from '@/data/types';

const STORAGE_KEY = 'english-learning-progress';
const EMPTY: UserProgress[] = [];

// Cache the parsed value so useSyncExternalStore gets a stable snapshot
let cachedRaw: string | null = null;
let cachedProgress: UserProgress[] = EMPTY;
const listeners = new Set<() => void>();

export function getProgress(): UserProgress[] {
  if (typeof window === 'undefined') return EMPTY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedProgress = raw ? JSON.parse(raw) : EMPTY;
    }
    return cachedProgress;
  } catch {
    return EMPTY;
  }
}

export function saveProgress(progress: UserProgress[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Keep other tabs in sync
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

/**
 * Reads progress from localStorage without hydration mismatches:
 * the server render and hydration see an empty list, then React
 * re-renders with the stored value.
 */
export function useProgress(): UserProgress[] {
  return useSyncExternalStore(subscribe, getProgress, () => EMPTY);
}

export function markItemComplete(
  topicId: string,
  contextId: string,
  skill: SkillType,
  itemId: string,
  score: number = 100
): void {
  const all = getProgress().map((p) => ({ ...p, completedItems: [...p.completedItems] }));
  const idx = all.findIndex(
    (p) => p.topicId === topicId && p.contextId === contextId && p.skill === skill
  );
  if (idx >= 0) {
    if (!all[idx].completedItems.includes(itemId)) {
      all[idx].completedItems.push(itemId);
    }
    all[idx].score = Math.max(all[idx].score, score);
    all[idx].lastStudied = new Date().toISOString();
  } else {
    all.push({ topicId, contextId, skill, completedItems: [itemId], score, lastStudied: new Date().toISOString() });
  }
  saveProgress(all);
}

export function getContextProgress(
  topicId: string,
  contextId: string,
  skill: SkillType,
  all: UserProgress[] = getProgress()
): UserProgress | null {
  return all.find(
    (p) => p.topicId === topicId && p.contextId === contextId && p.skill === skill
  ) ?? null;
}

export function getOverallStats(all: UserProgress[] = getProgress()) {
  const bySkill = { listening: 0, speaking: 0, reading: 0, writing: 0 } as Record<SkillType, number>;
  const counts = { listening: 0, speaking: 0, reading: 0, writing: 0 } as Record<SkillType, number>;
  for (const p of all) {
    bySkill[p.skill] += p.score;
    counts[p.skill]++;
  }
  const skills: SkillType[] = ['listening', 'speaking', 'reading', 'writing'];
  return skills.map((skill) => ({
    skill,
    average: counts[skill] > 0 ? Math.round(bySkill[skill] / counts[skill]) : 0,
    sessionsCompleted: counts[skill],
  }));
}

export function getTotalItemsCompleted(all: UserProgress[] = getProgress()): number {
  return all.reduce((sum, p) => sum + p.completedItems.length, 0);
}

export function getStudyStreak(all: UserProgress[] = getProgress()): number {
  if (all.length === 0) return 0;
  const dates = all
    .map((p) => new Date(p.lastStudied).toDateString())
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < dates.length; i++) {
    const d = new Date(dates[i]);
    const diffDays = Math.round((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === i) streak++;
    else break;
  }
  return streak;
}
