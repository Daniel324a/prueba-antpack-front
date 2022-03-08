import { Button } from '../components/Button';
import { CompaniesSelect } from '../components/CompaniesSelect';
import { TextField } from '../components/TextField';
import { TopBar } from '../components/TopBar';

import { useForm } from '../hooks/useForm';
import { User } from '../interfaces/user';

import styles from '../styles/index';
import { AddressesSelect } from '../components/AddressesSelect';
import { showErrorDialog, showWarningToast, showSuccessDialog, showLoadingDialog } from '../utils/SweetAlerts';
import { api } from '../utils/globals';

const { view, container } = styles;

export const NewUser = () => {
  const {
    form: { name, username, email, phone, website, company, address },
    form,
    setForm,
    handleFormChange,
  } = useForm<User>({ name: '', username: '', email: '', phone: '', website: '', company: '', address: '' });

  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();

    // Check company and address fields
    if (!company || !address) return showWarningToast('Please fill in all fields to create a new user.');

    // Show loading Dialog
    showLoadingDialog();

    // Fetch create user API
    fetch(`${api}users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(response => {
        if (!response.ok) return showErrorDialog(response.msg);

        showSuccessDialog('Success', 'User created successfully.');
      })
      .catch(err => showErrorDialog(err));
  };

  return (
    <div className={view}>
      <TopBar path='/' title='Create User' />
      <div className={container + 'mt-20'}>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <TextField
            required={true}
            handler={handleFormChange}
            value={name}
            name='name'
            label='Name:'
            placeholder='User fullname...'
            type='text'
          />
          <TextField
            required={true}
            handler={handleFormChange}
            value={username}
            name='username'
            label='Username:'
            placeholder='User nickname...'
            type='text'
          />
          <TextField
            required={true}
            handler={handleFormChange}
            value={email}
            name='email'
            label='Email:'
            placeholder='User email address...'
            type='email'
          />
          <TextField
            required={true}
            handler={handleFormChange}
            value={phone}
            name='phone'
            label='Phone:'
            placeholder='User phone...'
            type='tel'
          />
          <TextField
            required={true}
            handler={handleFormChange}
            value={website}
            name='website'
            label='Website:'
            placeholder='User website...'
            type='url'
          />

          <CompaniesSelect setForm={setForm} onSelected={handleFormChange} value={company} name='company' />
          <AddressesSelect setForm={setForm} onSelected={handleFormChange} value={address} name='address' />

          <Button text='Crear Usuario' type='submit' className='truncate' />
        </form>
      </div>
    </div>
  );
};
