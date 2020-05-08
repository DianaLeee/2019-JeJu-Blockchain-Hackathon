import React from "react";
import styled from "styled-components";
import NavTopHeader from "../components/Common/NavTopHeader";
import UserHeader from "../components/UserHeader/UserHeader";

interface IPageLayoutProps {
  children: JSX.Element | JSX.Element[];
  headerTitle?: string;
  isBack?: boolean;
}

const StyledGrid = styled.div`
  display: grid;
  background-color: #f4f6fc;
  justify-items: center;
  font-family: "AppleSDGothicNeo";
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-top: 64px;
  margin-bottom: 64px;

  text-align: center;
  display: flex !important;
  align-items: center !important;
  flex-direction: column;
`;

const Container = styled.div`
  display: grid;
  background-color: #f4f6fc;
  justify-items: center;
`;

// Page Layout with Navigation Top Header & Authorized User Information Header
const PageLayout = (props: IPageLayoutProps) => (
  <Container>
    <NavTopHeader title={props.headerTitle} isBack={props.isBack} />
    <UserHeader />
    <StyledGrid>{props.children}</StyledGrid>
  </Container>
);

export default PageLayout;
