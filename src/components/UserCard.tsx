import { User } from '../interfaces/user';

import styles from '../styles/';

const { card, animateTransforms } = styles;

export const UserCard = ({ user: { name, username, gravatar, company } }: UserCardProps) => {
  return (
    <div className={card + animateTransforms}>
      <img src={gravatar} alt={`${username}-pic`} className='w-4/5 rounded-full object-cover mb-8' />
      <h1 className='text-2xl font-light'>{name}</h1>
      <p className='text-xl font-light text-gray-500'>{username}</p>
      <br />
      <p className='text-xl text-gray-600'>From:</p>
      <p className='font-light text-xl text-gray-700'>{company.name}</p>
    </div>
  );
};

interface UserCardProps {
  user: User;
}
