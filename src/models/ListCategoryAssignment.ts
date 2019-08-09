import { CategoryAssignment } from './CategoryAssignment';
import { Meta } from './Meta';

export interface ListCategoryAssignment {
    Items?: Partial<CategoryAssignment>[];
    Meta?: Partial<Meta>;
}