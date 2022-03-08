import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { AddressForm } from '../components/dialogs/AddressForm';
import { CompanyForm } from '../components/dialogs/CompanyForm';
import { UserShowcase } from '../components/dialogs/UserShowcase';

import { User } from '../interfaces/user';
import { Address } from '../interfaces/address';
import { Company } from '../interfaces/company';
import { api } from './globals';
import { UpdateUserForm } from '../components/dialogs/UpdateUserForm';

const ReactSwal = withReactContent(Swal);
const loader = require('../assets/pulse_loader.gif');

// Layout Only Dialogs
export const showLoadingDialog = () =>
  ReactSwal.fire({
    html: (
      <div className='flex flex-col pb-5 items-center justify-center text-xl text-center'>
        <img src={loader} alt='loader' />
        <code className='-mt-12'>Loading</code>
      </div>
    ),
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEnterKey: false,
    allowEscapeKey: false,
  }).then(_ => false);

export const showErrorDialog = (err: any, title = 'Error Creating the User') =>
  ReactSwal.fire({
    title,
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
  }).then(_ => false);

export const showUserDialog = (user: User, doUpdate: () => void) =>
  ReactSwal.fire({
    title: user.name,
    html: <UserShowcase user={user} swal={ReactSwal} updateUsers={doUpdate} />,
    showConfirmButton: false,
    showCloseButton: true,
    showClass: {
      popup: 'animate__animated animate__slideInUp animate__faster',
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
  });

// Functionality Dialogs
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

  // Show loading Dialog
  showLoadingDialog();

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

export const showAddAddressDialog = async (): Promise<boolean> => {
  const { value: address } = await ReactSwal.fire({
    title: 'New Address',
    html: <AddressForm swal={ReactSwal} />,
    focusConfirm: false,
    preConfirm: (): Address => ({
      city: '' + (document.getElementById('swal-add-city') as HTMLInputElement).value,
      street: '' + (document.getElementById('swal-add-street') as HTMLInputElement).value,
      suite: '' + (document.getElementById('swal-add-suite') as HTMLInputElement).value,
      zipCode: '' + (document.getElementById('swal-add-zip') as HTMLInputElement).value,
    }),
    showConfirmButton: false,
    showCloseButton: true,
  });

  if (!address) return showWarningToast('Address not created.');

  // Show loading Dialog
  showLoadingDialog();

  // Fetch create address API
  const isCreated = await fetch(`${api}addresses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(address),
  })
    .then(res => res.json())
    .then(response => {
      if (!response.ok) return showErrorDialog(response.msg);

      return showSuccessDialog('Success', 'Address created successfully.');
    })
    .catch(err => showErrorDialog(err));

  return isCreated;
};

export const showAddCompanyDialog = async (): Promise<boolean> => {
  const { value: company } = await ReactSwal.fire({
    title: 'New Company',
    html: <CompanyForm swal={ReactSwal} />,
    focusConfirm: false,
    preConfirm: (): Company => ({
      name: '' + (document.getElementById('swal-com-name') as HTMLInputElement).value,
      catchPhrase: '' + (document.getElementById('swal-com-catchphrase') as HTMLInputElement).value,
      bs: '' + (document.getElementById('swal-com-bs') as HTMLInputElement).value,
    }),
    showConfirmButton: false,
    showCloseButton: true,
  });

  if (!company) return showWarningToast('Company not created.');

  // Show loading Dialog
  showLoadingDialog();

  // Fetch create address API
  const isCreated = await fetch(`${api}companies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(company),
  })
    .then(res => res.json())
    .then(response => {
      if (!response.ok) return showErrorDialog(response.msg);

      return showSuccessDialog('Success', 'Company created successfully.');
    })
    .catch(err => showErrorDialog(err));

  return isCreated;
};

export const showUpdateUserDialog = async (user: User): Promise<boolean> => {
  const { value: updatedUser } = await ReactSwal.fire({
    width: '40rem',
    html: <UpdateUserForm user={user} swal={ReactSwal} />,
    focusConfirm: false,
    showConfirmButton: false,
    showCloseButton: true,
    preConfirm: (): User => ({
      name: (document.getElementById('swal-us-name') as HTMLInputElement).value,
      username: (document.getElementById('swal-us-username') as HTMLInputElement).value,
      phone: (document.getElementById('swal-us-phone') as HTMLInputElement).value,
      email: (document.getElementById('swal-us-email') as HTMLInputElement).value,
      website: (document.getElementById('swal-us-website') as HTMLInputElement).value,
    }),
    showClass: {
      popup: 'animate__animated animate__slideInLeft animate__faster',
    },
    hideClass: {
      popup: 'animate__animated animate__slideOutRight animate__faster',
    },
  });

  if (!updatedUser) {
    setTimeout(() => showWarningToast('User not updated.'), 350);
    return false;
  }

  // Show loading Dialog
  showLoadingDialog();

  // Fetch update user API
  const isUpdated = await fetch(`${api}users/${user._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedUser),
  })
    .then(res => res.json())
    .then(response => {
      if (!response.ok) return showErrorDialog(response.msg);

      return showSuccessDialog('Success', 'User updated successfully.');
    })
    .catch(err => showErrorDialog(err));

  return isUpdated;
};
