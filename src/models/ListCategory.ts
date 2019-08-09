import { Category } from './Category';
import { Meta } from './Meta';

export interface ListCategory {
    Items?: Partial<Category>[];
    Meta?: Partial<Meta>;
}