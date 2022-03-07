import { TextField } from './TextField';
import { Button } from './Button';

import { useForm } from '../hooks/useForm';

import styles from '../styles/';

const { users } = styles;

export const UserSearchField = ({ onSearch, disabled = false }: UserSearchFieldProps) => {
  const {
    form: { search },
    handleFormChange,
  } = useForm({ search: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className={users.searchField} onSubmit={handleSubmit}>
      <TextField
        value={search}
        handler={handleFormChange}
        disabled={disabled}
        name='search'
        placeholder='Filter users by name, username or email...'
      />
      <Button disabled={disabled} type='submit' text='Search' />
      <Button.Link disabled={disabled} path='/new' text='New User' className='truncate' />
    </form>
  );
};

interface UserSearchFieldProps {
  onSearch: (value: string) => void;
  disabled: boolean;
}
