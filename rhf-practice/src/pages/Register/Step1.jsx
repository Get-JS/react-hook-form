import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Foundation from './templates/Foundation';
import Form from './organism/Form';
import Input from './organism/Input';
import NextButton from './organism/NextButton';
import { useData } from 'contexts/DataContext';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

function Step1Page() {
  const { data, setValues } = useData();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push('/register/step2');
    setValues(data);
  };

  return (
    <Foundation title="🦄 Step 1">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          name="firstName"
          label="First Name"
          type="text"
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id="lastName"
          name="lastName"
          label="Last Name"
          type="text"
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <NextButton>Next</NextButton>
      </Form>
    </Foundation>
  );
}

export default Step1Page;
