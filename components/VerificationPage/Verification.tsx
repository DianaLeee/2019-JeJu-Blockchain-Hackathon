import React from "react";
import styled from "styled-components";
import { Grid, Button } from "semantic-ui-react";

import Link from "next/link";

const verificationImage = require("../../assets/verification/invalid-name@2x.png");
interface IVerificationProps {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
}

const MainText = styled.span`
  width: 165px;
  height: 48px;
  font-family: "AppleSDGothicNeo";
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #2e384d;
`;

const BoldText = styled(MainText)`
  font-weight: 600;
`;

const StyledDiv = styled.div`
  padding-top: 45px;
`;

const StyledImage = styled.img`
  width: 292px;
  height: 465px;
  object-fit: contain;
  margin-right: 0px !important;
`;

const StyledButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`;

const WrapperDiv = styled.div`
  position: relative;
`;
const ButtonDiv = styled.div`
  position: absolute;
  left: -10px;
  bottom: 0.7em;
`;
const Verification = () => (
  <StyledDiv>
    <div>
      <MainText>본인인증을 위해</MainText>
      <br />
      <BoldText>신분증</BoldText>
      <MainText>을 불러와주세요</MainText>
    </div>
    <WrapperDiv>
      <div>
        <StyledImage src={verificationImage} />
      </div>
      <ButtonDiv>
        <Link href="/MainPage">
          <StyledButton>신분증 불러오기</StyledButton>
        </Link>
      </ButtonDiv>
    </WrapperDiv>
  </StyledDiv>
);

export default Verification;
