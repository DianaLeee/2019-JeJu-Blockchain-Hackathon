import React from "react";
import styled from "styled-components";
import { Grid, Image, Button } from "semantic-ui-react";
import Link from "next/link";

const StyledButton = styled(Button)`
  background-color: #2e5bff !important;
  opacity: ${props => props.opacity};
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff !important;
  width: 120px !important;
  font-weight: 500 !important;
`;

const MainText = styled.span`
  font-size: 17px;
  font-weight: 500;
  color: #2e384d;
`;

const SubText = styled.span`
  font-size: 10px;
  color: #8798ad;
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

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
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

const UserHeader = () => (
  <StyledGrid>
    <StyledMainWrapper>
      <StyledImgWrapper>
        <Image
          circular
          size="tiny"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
      </StyledImgWrapper>
      <StyledTwoRowWrapper>
        <StyledTextWrapper>
          <MainText style={{ marginRight: "0.5rem" }}>김유진</MainText>
          <SubText>Yujin Kim</SubText>
        </StyledTextWrapper>
        <StyledButtonWrapper>
          <Link href="/RegisterPage">
            <StyledButton size="tiny" opacity="0.5">
              반려견 등록
            </StyledButton>
          </Link>
          <Link href="/VisaFlightPage">
            <StyledButton size="tiny">VISA 발급</StyledButton>
          </Link>
        </StyledButtonWrapper>
      </StyledTwoRowWrapper>
    </StyledMainWrapper>
  </StyledGrid>
);

export default UserHeader;
