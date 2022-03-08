import { User } from '../../interfaces/user';
import { Address } from '../../interfaces/address';
import { Company } from '../../interfaces/company';

import styles from '../../styles/index';

const { alerts, roundedImage } = styles;

export const UserShowcase = ({
  user: { _id, name, email, username, phone, address, company, gravatar, website },
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
  </div>
);

interface UserShowcaseProps {
  user: User;
}
