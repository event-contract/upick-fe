import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/common/Header';
import Container from '../components/about/Container';

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
      <Header />
      <PageLayout>
        <Container title="왜 투자하는 것이 필요할까요?"></Container>
        <Container 
          title={`뉴스보고, 재무제표 분석하고,\n투자하기 힘들지 않으세요?`}
          titleAlign='center'
          colorSet='main'
        ></Container>
      </PageLayout>
    </>
  );
};

export default MainPage;