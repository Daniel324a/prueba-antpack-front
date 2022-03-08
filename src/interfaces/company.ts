export interface Company {
  _id?: string;
  name: string;
  catchPhrase: string;
  bs: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CompanyResponse {
  ok: boolean;
  count: number;
  companies: Company[];
}
