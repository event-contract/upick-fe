import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/common/Header';

const PageLayout = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const MainPage = () => {
  return (
    <>
      <Head>
        <title>UPick</title>
      </Head>
      <PageLayout>
        <Header />
      </PageLayout>
    </>
  );
};

export default MainPage;