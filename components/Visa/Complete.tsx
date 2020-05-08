import React, { Component, useState } from "react";
import styled from "styled-components";
import { Form, Button } from "semantic-ui-react";
import Link from "next/link";

const cardImage = require("../../assets/visa/complete.png");

const MainText = styled.div`
  font-family: "AppleSDGothicNeo";
  font-size: 22px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #2e384d;
  text-align: left !important;
`;

const StyledDiv = styled.div`
  height: 100% !important;
  padding-top: 45px;
  -webkit-tap-highlight-color: transparent;
`;

const LeftDiv = styled.div`
  width: 312px;
  float: left;
`;

const SubmitButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`;

const BoldText = styled.b`
  font-weight: 600;
`;

const TextDiv = styled.div`
  display: flex;
  padding-bottom: 20px !important;
`;

const SubText = styled(MainText)`
  color: #8798ad;
  font-size: 12px;
  width: 100%;
  float: center;
  padding-bottom: 20px !important;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Complete = () => {
  return (
    <StyledDiv>
      <LeftDiv>
        <TextDiv>
          <MainText>
            <BoldText>코코</BoldText>의<br />
            제주도 VISA 발급완료!
          </MainText>
        </TextDiv>
        <TextDiv>
          <SubText>공항에서 체크인시 VISA를 제시해주세요.</SubText>
        </TextDiv>
        <div>
          <StyledImage src={cardImage} />
        </div>
        <Link href="/MainPage">
          <SubmitButton type="submit" style={{ marginTop: "97px" }}>
            확인
          </SubmitButton>
        </Link>
      </LeftDiv>
    </StyledDiv>
  );
};

export default Complete;
