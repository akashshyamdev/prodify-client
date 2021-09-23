import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Form/Form';
import history from '../../../config/history';
import { login } from '../../../redux/slices/auth';
import { ReduxState } from '../../../types/redux';
import './login.scss';

function Login() {
  // State
  const [formData, setFormData] = useState({ email: '', password: '' });

  const dispatch = useDispatch();
  const auth = useSelector((state: ReduxState) => state.auth);

  useEffect(() => {
    if (auth?.isAuthenticated) {
      history.push('/');
    }
  }, [auth]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  return (
    <main className="h-screen overflow-hidden flex flex-row justify-center items-center login">
      <div className="w-96 h-96 absolute -right-24 -top-24 login__bg-element" />

      <Form
        submitText={'Login'}
        heading={'Login To Prodify'}
        inputs={[
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'password', type: 'password', placeholder: 'Password' },
        ]}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </main>
  );
}

export default Login;
