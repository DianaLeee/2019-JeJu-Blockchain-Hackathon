import React from "react";
import styled from "styled-components";
import {
  Grid,
  Card,
  Icon,
  Image,
  Button,
  Divider,
  Segment,
  GridColumn
} from "semantic-ui-react";
import AddCard from "../Card/AddCard";

const StyledGrid = styled(Grid)`
  text-align: center;
  vertical-align: middle;
  height: 575px;
  max-height: 640px !important;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledGridColumn = styled(Grid.Column)`
  max-width: 450px;
`;
const Initial = () => (
  <StyledGrid>
    <StyledGridColumn>
      <AddCard isAuth={false} />
    </StyledGridColumn>
  </StyledGrid>
);

export default Initial;
