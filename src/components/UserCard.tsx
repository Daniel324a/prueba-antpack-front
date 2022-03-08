import { DeleteRounded } from '@material-ui/icons';

import { Button } from './Button';

import { User } from '../interfaces/user';
import { Company } from '../interfaces/company';

import styles from '../styles/';

const { card, animateTransforms, roundedImage } = styles;

export const UserCard = ({ user: { name, username, gravatar, company }, onClick, action }: UserCardProps) => {
  return (
    <div className={card + animateTransforms} onClick={onClick}>
      <img src={gravatar} alt={`${username}-pic`} className={roundedImage + 'mb-8'} />
      <h1 className='text-2xl font-light truncate w-full'>{name}</h1>
      <p className='text-xl font-light text-gray-500'>{username}</p>
      <br />
      <p className='text-xl text-gray-600'>From:</p>
      <p className='font-light text-xl text-gray-700'>{(company as Company).name}</p>
      <Button.Round
        onClick={e => {
          e.stopPropagation();
          action();
        }}
        text={<DeleteRounded />}
        className='mt-5 z-20'
      />
    </div>
  );
};

interface UserCardProps {
  user: User;
  onClick: () => void;
  action: () => void;
}
