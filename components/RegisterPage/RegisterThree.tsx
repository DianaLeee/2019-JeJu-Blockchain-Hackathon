import React from "react";
import styled from "styled-components";
import { Radio, Form, Button } from "semantic-ui-react";

import Link from "next/link";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import { GlobalStore } from "../../stores/globalStore";
import { STORE } from "../../constants/stores";

interface IRegisterProps {
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  isClicked?: boolean;
  primary?: boolean;
}

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
  padding-top: 45px;
  -webkit-tap-highlight-color: transparent;
`;

const LeftDiv = styled.div`
  width: 312px;
  float: left;
`;
const StyledFormField = styled(Form.Field)`
  margin-bottom: 12px !important;
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
`;

const BoldSubText = styled.span`
  font-family: "AppleSDGothicNeo";
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.86;
  letter-spacing: normal;
  color: #8798ad;
  margin-top: 194px !important;
`;

const NormalSubText = styled(BoldSubText)`
  font-weight: normal;
`;

interface IRegisterThreeProps {
  globalStore?: GlobalStore;
}

const shipArray = [
  { id: 0, value: "우편배송 (+500원)", price: "3,500" },
  { id: 1, value: "등기배송 (+2,500원)", price: "5,500" },
  { id: 2, value: "현장방문", price: "3,000" }
];

// Third registration page
@inject(STORE.globalStore)
@observer
export default class RegisterThree extends React.Component<
  IRegisterThreeProps
> {
  @observable value = "3,000";

  @action
  setValue(_value: string) {
    this.value = _value;
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <StyledDiv>
        <LeftDiv>
          <TextDiv>
            <MainText>
              <BoldText>수령방법</BoldText>을 <br />
              선택해주세요.
            </MainText>
          </TextDiv>
          <TextDiv>
            <SubText>
              등록인식표 등 기본 발급비 3,000원 결제가 필요합니다.
            </SubText>
          </TextDiv>
          <Form>
            {shipArray.map((item: any) => (
              <StyledFormField>
                <Radio
                  label={item.value}
                  name="radioGroup"
                  value={item.price}
                  checked={this.value === item.price}
                  onChange={() => this.setValue(item.price)}
                />
              </StyledFormField>
            ))}
          </Form>
          <div style={{ marginTop: "300px" }}>
            <NormalSubText>
              <BoldSubText>총 결제 비용 </BoldSubText>
              {this.value}원
            </NormalSubText>
          </div>
          <Link href="/RegisterFourthPage">
            <SubmitButton type="submit" style={{ marginTop: "24px" }}>
              다음
            </SubmitButton>
          </Link>
        </LeftDiv>
      </StyledDiv>
    );
  }
}
