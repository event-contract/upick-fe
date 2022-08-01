import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Header from '../components/common/Header';
import Container from '../components/about/Container';
import InformationCard1 from '../components/about/InformationCard1';
import Box from '../components/core/Box';
import InformationCard2 from '../components/about/InformationCard2';

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

        <Container title={`내 의견이 이제는 자산이 되는 기회\nUPICK에서 의견을 주식처럼 거래하세요`}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <InformationCard1
              title={`YES/NO로 결과를\n예측하세요!`}
              content={`내가 관심있는 주제에 대해서 일어날\n가능성을 예측하고 원하는 가격으로\nYES 혹은 NO 주문을 넣을 수 있습니다`}
              image="/image"
            />
            <InformationCard1
              title={`현재가로 YES/NO\n포지션을 매수하세요!`}
              content={`오더북에서 사람들이 제시한 가격을 보고\n즉시 YES/NO 포지션을 매수할 수 있습니다`}
              image="/image"
              colorSet='main'
            />
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <InformationCard1
              title={`내가 매수한 포지션을\n매도하세요!`}
              content={`내가 예측한 사건이 일어나기 전에 포지션 가격이 상승한다면 포지션을 매도해서 수익을 얻을 수 있습니다!\n가격이 하락한다면 매도해서 손실을 최소화할 수도 있어요! :)`}
              image="/image"
              colorSet='main'
            />
            <InformationCard1
              title={`내 예측으로\n수익을 얻으세요!`}
              content={`해당 사건이 일어날 때까지 내 포지션을 보유한다면\n보유한 포지션 당 1000원의 수익을 얻을 수 있어요!`}
              image="/image"
            />
          </Box>
        </Container>

        <Container title={`왜 UPICK 일까요?\nUPICK에는 어떤 특별한 점이 있을까요?`} colorSet="white">
          <Box marginTop="2rem" display="flex" justifyContent="center" flexWrap="wrap">
            <Box display="flex" paddingTop="2rem">
              <InformationCard2
                image="/image"
                title="내가 아는 것에 대해서만"
                content={`랄라블라엉쩌룰루어\n랄라 거래소 엉우난 하할 수 있어요`}
              />
              <InformationCard2
                image="/image"
                title="복잡하지 않은 YES NO 옵션"
                content={`랄라블라엉쩌룰루어\n랄라 거래소 엉우난 하할 수 있어요`}
              />
            </Box>
            <Box display="flex" paddingTop="2rem">
              <InformationCard2
                image="/image"
                title="내가 투자한만큼 돌려받고"
                content={`랄라블라엉쩌룰루어\n랄라 거래소 엉우난 하할 수 있어요`}
              />
              <InformationCard2
                image="/image"
                title="사람들의 의견이 궁금하다면"
                content={`랄라블라엉쩌룰루어\n랄라 거래소 엉우난 하할 수 있어요`}
              />
            </Box>
          </Box>
        </Container>
      </PageLayout>
    </>
  );
};

export default MainPage;