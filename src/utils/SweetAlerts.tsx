import Swal, { SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DeleteRounded } from '@material-ui/icons';

import { Button } from '../components/Button';

import { User } from '../interfaces/user';
import { api } from './globals';
import { Company } from '../interfaces/company';
import { Address } from '../interfaces/address';

const ReactSwal = withReactContent(Swal);

export const showErrorDialog = (err: any) =>
  ReactSwal.fire({
    title: 'Error Creating the User',
    html: (
      <p className='text-gray-400'>
        {err}
        <br />
        <br />
        <b className='text-gray-500'>Please contact an admin or try later.</b>
      </p>
    ),
    icon: 'error',
    showCloseButton: true,
  }).then(_ => false);

export const showSuccessDialog = (title: string, msg: string) => ReactSwal.fire(title, msg, 'success').then(_ => true);

export const showWarningToast = (warn: string) =>
  ReactSwal.fire({
    title: warn,
    icon: 'warning',
    position: 'bottom-left',
    showConfirmButton: false,
    showCloseButton: true,
    toast: true,
    timerProgressBar: true,
    timer: 2000,
  });

export const showDeleteDialog = async (endpoint: string, id: string): Promise<boolean> => {
  const { isConfirmed } = await ReactSwal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });

  if (!isConfirmed) return false;

  // Fetch delete API
  const isDeleted = await fetch(`${api}${endpoint}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(response => {
      if (!response.ok) return showErrorDialog(response.msg);

      return showSuccessDialog('Success', 'User deleted successfully.');
    })
    .catch(err => showErrorDialog(err));

  return isDeleted;
};

export const showUserDialog = ({ _id, name, email, username, phone, address, company, gravatar, website }: User) =>
  ReactSwal.fire({
    title: name,
    html: (
      <div className='flex flex-col gap-1.5 items-center pb-5 text-gray-600 font-light text-xl'>
        <img src={gravatar} alt={_id + '-pic'} className='rounded-full object-cover w-4/5 my-4' />
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
          <p className='text-gray-400'>{website}</p>
        </div>
      </div>
    ),
    showConfirmButton: false,
    showCloseButton: true,
  });
