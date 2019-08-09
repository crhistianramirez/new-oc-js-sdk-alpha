import { AddressAssignment } from './AddressAssignment';
import { Meta } from './Meta';

export interface ListAddressAssignment {
    Items?: Partial<AddressAssignment>[];
    Meta?: Partial<Meta>;
}