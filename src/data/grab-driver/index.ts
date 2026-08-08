import { Topic } from '../types';
import { grabbikePassengerContext } from './grabbike-passenger';
import { grabExpressDeliveryContext } from './grab-express-delivery';
import { grabfoodDeliveryContext } from './grabfood-delivery';
import { grabmartDeliveryContext } from './grabmart-delivery';

export const grabDriverTopic: Topic = {
  id: 'grab-driver',
  title: 'Grab Driver',
  titleVi: 'Tài xế công nghệ Grab',
  description: 'Master English to confidently serve passengers and customers across GrabBike, GrabExpress, GrabFood, and GrabMart.',
  descriptionVi: 'Thành thạo tiếng Anh để tự tin phục vụ khách hàng trên GrabBike, GrabExpress, GrabFood và GrabMart.',
  icon: '🛵',
  coverColor: 'from-green-500 to-emerald-600',
  contexts: [
    grabbikePassengerContext,
    grabExpressDeliveryContext,
    grabfoodDeliveryContext,
    grabmartDeliveryContext,
  ],
};
