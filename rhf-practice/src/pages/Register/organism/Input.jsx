import React, { forwardRef } from 'react';
import TextField from '@material-ui/core/TextField';

function Input(props, ref) {
  return <TextField variant="outlined" margin="normal" inputRef={ref} fullWidth {...props} />;
}
export default forwardRef(Input);
