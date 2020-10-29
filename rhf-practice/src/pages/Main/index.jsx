import React from 'react';
import MainContainer from 'components/organism/MainContainer';
import Header from 'components/organism/Header';
import Button from '@material-ui/core/Button';

function MainPage() {
  return (
    <>
      <Header title="What is react hook form lib?" />
      <MainContainer>
        <Button variant="contained" color="primary" href="/register">
          Let's Start
        </Button>
      </MainContainer>
    </>
  );
}

export default MainPage;
