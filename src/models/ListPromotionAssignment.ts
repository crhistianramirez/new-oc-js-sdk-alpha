import { PromotionAssignment } from './PromotionAssignment';
import { Meta } from './Meta';

export interface ListPromotionAssignment {
    Items: PromotionAssignment[];
    Meta: Meta;
}