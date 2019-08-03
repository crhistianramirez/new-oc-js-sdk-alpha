import { ProductAssignment } from './ProductAssignment';
import { Meta } from './Meta';

export interface ListProductAssignment {
    Items: ProductAssignment[];
    Meta: Meta;
}