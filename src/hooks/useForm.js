import { useState } from 'react';

const useForm = (valoresIniciais) => {
  const [form, setForm] = useState(valoresIniciais);
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm(valoresIniciais);
  };
  return {
    form,
    handleForm,
    clearForm,
  };
};

export default useForm;
