import React from "react";
import styled, { css } from "styled-components";
import { Form, Button, TextArea } from "semantic-ui-react";

import { SyncLoader } from "react-spinners";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import Router from "next/router";
import { animalCareAPI } from "../../klaytnAPI/AnimalCareAPI";
import { GlobalStore } from "../../stores/globalStore";
import { STORE } from "../../constants/stores";

const MainText = styled.div`
  font-size: 18px;
  font-weight: 300 !important;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #2e384d;
  padding-bottom: 12px !important;
  text-align: left !important;
`;

const StyledDiv = styled.div`
  padding-top: 45px;
  -webkit-tap-highlight-color: transparent;
`;

const LoadingDiv = styled.div`
  display: flex;
  height: 504px;
  justify-content: center;
  align-items: center;
`;

const LeftDiv = styled.div`
  width: 312px;
  float: left;
`;
const StyledFormField = styled(Form.Field)`
  margin-bottom: 40px !important;
`;

const SubmitButton = styled(Button)`
  width: 312px;
  height: 50px;
  border-radius: 4px;
  background-color: #2e5bff !important;
  color: #ffffff !important;
`;

const SelectButton = styled(Button)`
  border-radius: 4px !important;
  margin-bottom: 10px !important;
  padding: 9px !important;
  margin-right: 8px !important;
`;
const DivFloat = styled.div`
  float: left;
  text-align: left;
`;

const illnessArray = [
  { id: 0, value: "슬개골" },
  { id: 1, value: "결석" },
  { id: 2, value: "습진" },
  { id: 3, value: "눈물자국" },
  { id: 4, value: "각막손상" },
  { id: 5, value: "기관지협착증" },
  { id: 6, value: "발작" },
  { id: 7, value: "피부질환" }
];

interface IRegisterTwoProps {
  globalStore?: GlobalStore;
}

// Second registration page
@inject(STORE.globalStore)
@observer
export default class RegisterTwo extends React.Component<IRegisterTwoProps> {
  @observable loading: boolean = false;
  @observable loadingDone: boolean = false;

  @observable birth: string = "";
  @observable adoptionDate: string = "";

  @observable remarks: boolean[] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ];

  @action
  remarksClick = (_type: number) => {
    this.remarks[_type] = !this.remarks[_type];
  };

  @action
  updateBirth = (value: string) => {
    this.birth = value;
  };

  @action
  updateAdoptionDate = (value: string) => {
    this.adoptionDate = value;
  };

  handler = () => {
    Router.push({
      pathname: "/RegisterThirdPage"
    });
  };

  @action
  onClick = async () => {
    this.loading = !this.loading;
    let gender: string = "";
    // 중성
    if (this.props.globalStore.neutralization === "1") {
      gender = "2";
    } else {
      if (this.props.globalStore.gender === "1") {
        gender = "1";
      } else {
        gender = "0";
      }
    }

    const animalName = this.props.globalStore.name;
    const animalType = this.props.globalStore.animalType;
    const animalColor = this.props.globalStore.colorType;
    this.props.globalStore.setTempAniName(animalName);

    await animalCareAPI.txSetFamily(this.props.globalStore.userDID.toString());
    setTimeout(
      async function() {
        await animalCareAPI.txSetRegistAnimal(
          this.props.globalStore.animalID.toString(),
          animalName,
          animalType,
          animalColor,
          gender,
          this.birth,
          this.adoptionDate,
          ""
        );

        this.loadingDone = true;
      }.bind(this),
      4000
    );

    this.props.globalStore.clearFirstRegistPage();
  };

  render() {
    if (this.loadingDone) {
      this.handler();
    }
    return (
      <StyledDiv>
        <LeftDiv>
          {this.loading ? (
            <LoadingDiv>
              <SyncLoader
                sizeUnit={"px"}
                size={20}
                color={"#2E5BFF"}
                loading={true}
              />
            </LoadingDiv>
          ) : (
            <Form>
              <StyledFormField>
                <MainText>입양일을 입력해주세요</MainText>
                <input
                  value={this.birth}
                  onChange={value => this.updateBirth(value.target.value)}
                  type="text"
                  placeholder="20171022"
                />
              </StyledFormField>
              <StyledFormField>
                <MainText>생년월일을 입력해주세요</MainText>
                <input
                  value={this.adoptionDate}
                  onChange={value =>
                    this.updateAdoptionDate(value.target.value)
                  }
                  type="text"
                  placeholder="20171022"
                />
              </StyledFormField>
              <StyledFormField>
                <MainText>병력을 적어주세요</MainText>
                <DivFloat>
                  {illnessArray.map((item: any) => (
                    <SelectButton
                      active={this.remarks[item.id]}
                      onClick={() => this.remarksClick(item.id)}
                      basic
                      size="mini"
                    >
                      {item.value}
                    </SelectButton>
                  ))}
                </DivFloat>
                <TextArea placeholder="기타 (30자 이내)" />
              </StyledFormField>
              <SubmitButton onClick={() => this.onClick()} type="submit">
                다음
              </SubmitButton>
            </Form>
          )}
        </LeftDiv>
      </StyledDiv>
    );
  }
}
