import { Topic } from '../types';
import { takingOrdersContext } from './taking-orders';
import { handlingComplaintsContext } from './handling-complaints';
import { staffTrainingContext } from './staff-training';
import { supplierNegotiationsContext } from './supplier-negotiations';
import { marketingContext } from './marketing';
import { hiringContext } from './hiring';
import { financialTalksContext } from './financial-talks';
import { expansionContext } from './expansion';

export const bubbleTeaShopTopic: Topic = {
  id: 'bubble-tea-shop',
  title: 'Bubble Tea Shop Owner',
  titleVi: 'Chủ quán trà sữa',
  description: 'Master English for running your bubble tea business — from taking orders to managing staff and growing your brand.',
  descriptionVi: 'Thành thạo tiếng Anh để vận hành quán trà sữa — từ nhận đơn đến quản lý nhân viên và phát triển thương hiệu.',
  icon: '🧋',
  coverColor: 'from-amber-400 to-orange-500',
  contexts: [
    takingOrdersContext,
    handlingComplaintsContext,
    staffTrainingContext,
    supplierNegotiationsContext,
    marketingContext,
    hiringContext,
    financialTalksContext,
    expansionContext,
  ],
};
