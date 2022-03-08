import { ChangeEventHandler, useEffect } from 'react';

import { useFetch } from '../hooks/useFetch';
import { AddressResponse } from '../interfaces/address';
import { User } from '../interfaces/user';
import { api } from '../utils/globals';

import styles from '../styles/index';

const { textField, animateTransforms } = styles;

export const AddressesSelect = ({ onSelected, value, name, setForm }: AddressesSelectProps) => {
  const { loading, response } = useFetch<AddressResponse>(`${api}addresses/`);

  useEffect(() => {
    if (response) setForm((form: User) => ({ ...form, [name]: response.addresses[0]._id }));
    return () => {};
  }, [response]);

  return (
    <div className='flex flex-col flex-grow'>
      <label className='text-gray-500'>Select Address:</label>
      <select
        onChange={onSelected}
        value={value}
        name={name}
        className={textField + animateTransforms}
        disabled={loading}
        required={true}
      >
        {loading && <option>Loading Addresses...</option>}
        {response?.addresses.map(address => (
          <option key={address._id} value={address._id}>
            {address.city}, {address.street} - Zip: {address.zipCode}
          </option>
        ))}
      </select>
    </div>
  );
};

interface AddressesSelectProps {
  onSelected: ChangeEventHandler<HTMLSelectElement>;
  value: string | any;
  name: string;
  setForm: (form: any) => void;
}
