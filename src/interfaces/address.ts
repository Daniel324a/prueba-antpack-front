export interface Address {
  _id?: string;
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AddressResponse {
  ok: boolean;
  count: number;
  addresses: Address[];
}
