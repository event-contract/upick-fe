import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

const Container = styled.div`
  padding: 30px;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const MainPage = () => {
  return (
    <>
      <Head>
        <title>event</title>
      </Head>
      <Container>
        <h1>Zn, J.J, wooFe</h1>
      </Container>
    </>
  );
};

export default MainPage;