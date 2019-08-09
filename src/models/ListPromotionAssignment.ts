import { PromotionAssignment } from './PromotionAssignment';
import { Meta } from './Meta';

export interface ListPromotionAssignment {
    Items?: Partial<PromotionAssignment>[];
    Meta?: Partial<Meta>;
}