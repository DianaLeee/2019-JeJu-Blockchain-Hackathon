import React, { Component } from "react";
import styled from "styled-components";
import { Grid, Menu, Image } from "semantic-ui-react";
const homeImg = require("../../assets/home.svg");
const settingImg = require("../../assets/setting.svg");
const communityImg = require("../../assets/community.svg");
const placeImg = require("../../assets/place.svg");

const MainGrid = styled(Grid)``;

interface INavBottomFooter {
  title?: string;
  isClicked?: boolean;
}

const StyledMenu = styled(Menu)`
  width: 100%;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #f8fafc;
  border: none !important;
  border-radius: 0 !important;
  border-top: solid 1px #dde6f2 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const StyledImage = styled(Image)`
  background-color: #606060;
`;

const StyledText = styled.div<INavBottomFooter>`
  height: 16px;
  font-family: "SFProDisplay";
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: ${props => (props.isClicked ? "#1c38d7" : "#686868")};
`;
const StyledMenuItem = styled(Menu.Item)`
  &::before {
    width: 0px !important;
  }
`;

export default class NavBottomFooter extends React.Component {
  state = {};

  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    const activeItem = this.state;

    return (
      <MainGrid>
        <StyledMenu icon="labeled">
          <StyledMenuItem
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <StyledImage src={homeImg} />
            <StyledText isClicked>홈</StyledText>
          </StyledMenuItem>

          <StyledMenuItem
            name="place"
            active={activeItem === "place"}
            onClick={this.handleItemClick}
          >
            <StyledImage src={placeImg} />
            <StyledText>펫플레이스</StyledText>
          </StyledMenuItem>

          <StyledMenuItem
            name="community"
            active={activeItem === "community"}
            onClick={this.handleItemClick}
          >
            <StyledImage src={communityImg} />
            <StyledText>커뮤니티</StyledText>
          </StyledMenuItem>

          <StyledMenuItem
            name="setting"
            active={activeItem === "setting"}
            onClick={this.handleItemClick}
          >
            <StyledImage src={settingImg} />
            <StyledText>설정</StyledText>
          </StyledMenuItem>
        </StyledMenu>
      </MainGrid>
    );
  }
}
