import { useState } from 'react';

import { UserCard } from '../components/UserCard';
import { UserSearchField } from '../components/UserSearchField';

import { useFetch } from '../hooks/useFetch';
import { UserResponse } from '../interfaces/user';
import { api } from '../utils/globals';

import styles from '../styles/';

const { view, users } = styles;

export const HomeView = () => {
  const [search, setSearch] = useState('');
  const { loading, response, doUpdate } = useFetch<UserResponse>(`${api}users/?search=${search}`);

  const handleSearch = (value = '') => {
    setSearch(value);
    doUpdate();
  };

  return (
    <div className={view}>
      <UserSearchField onSearch={handleSearch} disabled={loading} />
      <div className={users.container}>
        {!loading && response?.users.map(user => <UserCard key={user._id} user={user} />)}
      </div>
    </div>
  );
};
