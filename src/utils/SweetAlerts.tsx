import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

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
  });

export const showSuccessDialog = (title: string, msg: string) => ReactSwal.fire(title, msg, 'success');

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
