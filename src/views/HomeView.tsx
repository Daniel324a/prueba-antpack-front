import { useState } from 'react';

import { UserCard } from '../components/UserCard';
import { TopBar } from '../components/TopBar';

import { useFetch } from '../hooks/useFetch';
import { UserResponse, User } from '../interfaces/user';
import { api } from '../utils/globals';

import styles from '../styles/';
import { showDeleteDialog, showUserDialog } from '../utils/SweetAlerts';

const { view, users } = styles;

export const HomeView = () => {
  const [search, setSearch] = useState('');
  const { loading, response, doUpdate } = useFetch<UserResponse>(`${api}users/?search=${search}`);

  const handleSearch = (value = '') => {
    setSearch(value);
    doUpdate();
  };

  const handleUserClick = (user: User) => showUserDialog(user, doUpdate);
  const handleUserAction = (id: string) => showDeleteDialog('users', id).then(isDeleted => isDeleted && doUpdate());

  return (
    <div className={view}>
      <TopBar.SearchUsers onSearch={handleSearch} disabled={loading} />
      <div className={users.container}>
        {!loading &&
          response?.users.map(user => (
            <UserCard
              key={user._id}
              user={user}
              onClick={() => handleUserClick(user)}
              action={() => handleUserAction(user._id!!)}
            />
          ))}
      </div>
    </div>
  );
};
