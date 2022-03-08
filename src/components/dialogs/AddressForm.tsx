import { ReactSweetAlert } from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { Button } from '../Button';
import styles from '../../styles/index';

const { textField, animateTransforms } = styles;

export const AddressForm = ({ swal }: AddressFormProps) => {
  return (
    <form
      className='w-full flex flex-col gap-2 items-center sm:px-5'
      onSubmit={e => {
        e.preventDefault();
        swal.clickConfirm();
      }}
    >
      <input id='swal-add-city' className={textField + animateTransforms} required={true} placeholder='City...' />
      <input id='swal-add-street' className={textField + animateTransforms} required={true} placeholder='Street...' />
      <input id='swal-add-suite' className={textField + animateTransforms} required={true} placeholder='Suite...' />
      <input id='swal-add-zip' className={textField + animateTransforms} required={true} placeholder='Zip Code...' />
      <Button text='Create' type='submit' className='truncate mt-3 px-10' />
    </form>
  );
};

interface AddressFormProps {
  swal: typeof Swal & ReactSweetAlert;
}
