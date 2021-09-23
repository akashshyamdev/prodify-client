import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../../../components/Form/Form';
import history from '../../../config/history';
import { signup } from '../../../redux/slices/auth';
import { ReduxState } from '../../../types/redux';
import './signup.scss';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function Signup() {
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '', password: '' });

  const dispatch = useDispatch();
  const auth = useSelector((state: ReduxState) => state.auth);

  useEffect(() => {
    if (auth?.isAuthenticated && !auth?.error) {
      history.push('/');
    }
  }, [auth]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('A');

    dispatch(signup(formData));
  };

  return (
    <main className="h-screen overflow-hidden flex flex-row justify-center items-center signup">
      <div className="w-96 h-96 absolute -right-24 -top-24 signup__bg-element" />

      <Form
        submitText={'Signup'}
        heading={'Welcome To Prodify'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        inputs={[
          { name: 'firstName', type: 'text', placeholder: 'First Name' },
          { name: 'lastName', type: 'text', placeholder: 'Last Name' },
          { name: 'email', type: 'email', placeholder: 'Email' },
          { name: 'password', type: 'password', placeholder: 'Password' },
        ]}
      />
    </main>
  );
}

export default Signup;
