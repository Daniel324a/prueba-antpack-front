import { ReactSweetAlert } from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { Button } from '../Button';
import styles from '../../styles/index';

const { textField, animateTransforms } = styles;

export const CompanyForm = ({ swal }: CompanyFormProps) => {
  return (
    <form
      className='w-full flex flex-col gap-2 items-center sm:px-5'
      onSubmit={e => {
        e.preventDefault();
        swal.clickConfirm();
      }}
    >
      <input id='swal-com-name' className={textField + animateTransforms} required={true} placeholder='Name...' />
      <input
        id='swal-com-catchphrase'
        className={textField + animateTransforms}
        required={true}
        placeholder='Catch phrase...'
      />
      <input id='swal-com-bs' className={textField + animateTransforms} required={true} placeholder='BS...' />
      <Button text='Create' type='submit' className='truncate mt-3 px-10' />
    </form>
  );
};

interface CompanyFormProps {
  swal: typeof Swal & ReactSweetAlert;
}
