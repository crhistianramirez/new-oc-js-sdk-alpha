import { CategoryProductAssignment } from './CategoryProductAssignment';
import { Meta } from './Meta';

export interface ListCategoryProductAssignment {
    Items?: Partial<CategoryProductAssignment>[];
    Meta?: Partial<Meta>;
}