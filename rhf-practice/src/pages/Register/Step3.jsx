import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Foundation from './templates/Foundation';
import Form from './organism/Form';
import FileInput from './organism/FileInput';
import NextButton from './organism/NextButton';
import { useData } from 'contexts/DataContext';

function Step3() {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push('./result');
    setValues(data);
  };

  return (
    <Foundation title="🦄 Step 3">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <NextButton>Next</NextButton>
      </Form>
    </Foundation>
  );
}
export default Step3;
