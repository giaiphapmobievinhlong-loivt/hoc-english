import { bubbleTeaShopTopic } from './bubble-tea-shop';
import { grabDriverTopic } from './grab-driver';
import { Topic } from './types';

export const allTopics: Topic[] = [bubbleTeaShopTopic, grabDriverTopic];

export { bubbleTeaShopTopic, grabDriverTopic };
export * from './types';
