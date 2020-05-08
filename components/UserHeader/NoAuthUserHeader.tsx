import React from "react";
import styled from "styled-components";
import { Grid, Image, Button } from "semantic-ui-react";

const defaultUserImage = require("../../assets/defaultFace.png");

const StyledButton = styled(Button)`
  background-color: #2e5bff !important;
  opacity: ${props => props.opacity};
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff !important;
  width: 120px !important;
  font-weight: 500 !important;
`;

const SubText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #2e384d;
  float: left;
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  border-radius: 1px;
  border-bottom: solid 1px rgba(46, 91, 255, 0.08);
  background-color: #ffffff;
  padding-top: 64px !important;
`;

const StyledMainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const StyledImgWrapper = styled.div`
  margin-right: 1rem;
`;

const StyledTwoRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NonAuthUserHeader = () => (
  <StyledGrid>
    <StyledMainWrapper>
      <StyledImgWrapper>
        <Image circular size="tiny" src={defaultUserImage} />
      </StyledImgWrapper>
      <StyledTwoRowWrapper>
        <SubText>댕댕비자에 오신 것을 환영합니다!</SubText>
        <StyledButtonWrapper>
          <StyledButton size="tiny" opacity="0.5">
            이용방법
          </StyledButton>
          <StyledButton size="tiny">신분인증</StyledButton>
        </StyledButtonWrapper>
      </StyledTwoRowWrapper>
    </StyledMainWrapper>
  </StyledGrid>
);

export default NonAuthUserHeader;
