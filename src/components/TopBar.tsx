import { ArrowBackIosRounded } from '@material-ui/icons';

import { TextField } from './TextField';
import { Button } from './Button';

import { useForm } from '../hooks/useForm';

import styles from '../styles';

const { topBar } = styles;

export const TopBar = ({ path, title = '' }: TopBarProps) => (
  <div className={topBar}>
    {path && <Button.NavIcon path={path} icon={<ArrowBackIosRounded />} />}
    <h1 className='text-3xl font-light -mt-1'>{title}</h1>
  </div>
);

const SearchUsers = ({ onSearch, path, disabled = false }: SearchBarProps) => {
  const {
    form: { search },
    handleFormChange,
  } = useForm({ search: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className={topBar} onSubmit={handleSubmit}>
      {path && <Button.NavIcon disabled={disabled} path={path} icon={<ArrowBackIosRounded />} />}

      <TextField
        value={search}
        handler={handleFormChange}
        disabled={disabled}
        name='search'
        placeholder='Filter users by name, username or email...'
      />
      <Button disabled={disabled} type='submit' text='Search' className='flex-shrink-0' />
      <Button.Link disabled={disabled} path='/new' text='New User' className='truncate flex-shrink-0' />
    </form>
  );
};

TopBar.SearchUsers = SearchUsers;

interface TopBarProps {
  path?: string;
  title?: string;
}

interface SearchBarProps extends TopBarProps {
  onSearch: (value: string) => void;
  disabled: boolean;
}
