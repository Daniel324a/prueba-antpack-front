import { ChangeEventHandler, useEffect } from 'react';

import { useFetch } from '../hooks/useFetch';
import { CompanyResponse } from '../interfaces/company';
import { User } from '../interfaces/user';
import { api } from '../utils/globals';

import styles from '../styles/index';

const { textField, animateTransforms } = styles;

export const CompaniesSelect = ({ onSelected, value, name, setForm }: CompaniesSelectProps) => {
  const { loading, response } = useFetch<CompanyResponse>(`${api}companies/`);

  useEffect(() => {
    if (response) setForm((form: User) => ({ ...form, [name]: response.companies[0]._id }));
    return () => {};
  }, [response]);

  return (
    <div className='flex flex-col flex-grow'>
      <label className='text-gray-500'>Select Company:</label>
      <select
        onChange={onSelected}
        value={value}
        name={name}
        className={textField + animateTransforms}
        disabled={loading}
        required={true}
      >
        {loading && <option>Loading Companies...</option>}
        {response?.companies.map(company => (
          <option key={company._id} value={company._id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>
  );
};

interface CompaniesSelectProps {
  onSelected: ChangeEventHandler<HTMLSelectElement>;
  value: string | any;
  name: string;
  setForm: (form: any) => void;
}
