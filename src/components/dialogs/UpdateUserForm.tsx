import Swal from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

import { Button } from '../Button';

import { User } from '../../interfaces/user';

import styles from '../../styles/index';

const { roundedImage, textField, animateTransforms } = styles;

export const UpdateUserForm = ({
  user: { _id, name, username, email, phone, website, gravatar },
  swal,
}: UpdateUserFormProps) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        swal.clickConfirm();
      }}
      className='flex flex-col items-center py-5 w-full h-auto sm:p-5'
    >
      <div className='flex flex-col gap-5 items-center md:flex-row'>
        <img src={gravatar} alt={_id + '-pic'} className={roundedImage + 'w-1/2 md:w-2/5'} />
        <div className='flex flex-col flex-grow gap-2 w-full'>
          <input
            id='swal-us-name'
            className={textField + animateTransforms}
            required={true}
            placeholder='Name...'
            defaultValue={name}
          />
          <input
            id='swal-us-username'
            className={textField + animateTransforms}
            required={true}
            placeholder='User nickname...'
            defaultValue={username}
          />
          <input
            id='swal-us-email'
            className={textField + animateTransforms}
            required={true}
            placeholder='Email address...'
            type='email'
            defaultValue={email}
          />
          <input
            id='swal-us-phone'
            className={textField + animateTransforms}
            required={true}
            placeholder='Phone...'
            type='tel'
            defaultValue={phone}
          />
          <input
            id='swal-us-website'
            className={textField + animateTransforms}
            required={true}
            placeholder='Website...'
            type='url'
            defaultValue={website}
          />
        </div>
      </div>
      <Button text='Update' type='submit' className='truncate mt-10 px-10' />
    </form>
  );
};

interface UpdateUserFormProps {
  user: User;
  swal: typeof Swal & ReactSweetAlert;
}
