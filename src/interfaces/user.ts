import { Address } from './address';
import { Company } from './company';

export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  gravatar: string;
  address: Address;
  company: Company;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserResponse {
  ok: boolean;
  count: number;
  users: User[];
}
