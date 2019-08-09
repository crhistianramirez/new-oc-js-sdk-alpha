import { ProductAssignment } from './ProductAssignment';
import { Meta } from './Meta';

export interface ListProductAssignment {
    Items?: Partial<ProductAssignment>[];
    Meta?: Partial<Meta>;
}