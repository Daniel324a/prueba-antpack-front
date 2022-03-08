import { EditRounded } from '@material-ui/icons';

import { Button } from '../Button';

import { User } from '../../interfaces/user';
import { Address } from '../../interfaces/address';
import { Company } from '../../interfaces/company';
import { showUpdateUserDialog } from '../../utils/SweetAlerts';

import styles from '../../styles/index';
import { ReactSweetAlert } from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const { alerts, roundedImage } = styles;

export const UserShowcase = ({
  user: { _id, email, username, phone, address, company, gravatar, website },
  user,
  swal,
  updateUsers,
}: UserShowcaseProps) => (
  <div className={alerts.user}>
    <img src={gravatar} alt={_id + '-pic'} className={roundedImage + 'my-4'} />
    <div>
      <p className='font-medium'>Username:</p>
      <p>{username}</p>
    </div>
    <div>
      <p className='font-medium'>Email:</p>
      <p>{email}</p>
    </div>

    <div className='mt-2'>
      <p className='font-medium'>Phone:</p>
      <p>{phone}</p>
    </div>
    <div>
      <p className='font-medium'>Address:</p>
      <p>
        {(address as Address).city}, {(address as Address).street}
      </p>
    </div>

    <div className='mt-2'>
      <p className='font-medium'>On:</p>
      <p>{(company as Company).name}</p>
    </div>

    <div className='mt-2'>
      <p className='font-medium'>Website:</p>
      <p>{website}</p>
    </div>
    <Button.Round
      onClick={() => {
        swal.close();
        setTimeout(() => showUpdateUserDialog(user).then(isUpdated => isUpdated && updateUsers()), 300);
      }}
      text={<EditRounded htmlColor='#9e9e9e' />}
      className='absolute right-0 bottom-0'
    />
  </div>
);

interface UserShowcaseProps {
  user: User;
  swal: typeof Swal & ReactSweetAlert;
  updateUsers: () => void;
}
