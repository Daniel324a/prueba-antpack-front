import { useState } from 'react';

export const useForm = <T>(initialState: T, callback?: Function) => {
  const [form, setForm] = useState(initialState);

  const clear = () => setForm(initialState);

  const handleFormChange = ({ target }: any) => {
    if (callback) callback(target);

    const value = () => {
      switch (target.type) {
        case 'checkbox':
          return target.checked;

        case 'file':
          return { file: target.files[0], path: target.value };

        default:
          return target.value;
      }
    };

    setForm({
      ...form,
      [target.name]: value(),
    });
  };

  return { form, handleFormChange, setForm, clear };
};
