import React from 'react';
import MainContainer from 'components/organism/MainContainer';
import Typography from '@material-ui/core/Typography';

function Foundation({ title, children }) {
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      {children}
    </MainContainer>
  );
}

export default Foundation;
