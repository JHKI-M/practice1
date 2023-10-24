import React from "react";
import { BiSolidUser } from "react-icons/bi";
import styled from "styled-components";
function NickName(props) {
  return (
    <Container>
      <div>
        <MyNameText>
          <BiSolidUser /> 닉네임
        </MyNameText>
        <Subtitle>BOOKER에서 사용하실 닉네임을 알려주세요!</Subtitle>
        <Input type="text" placeholder="닉네임을 입력" />
      </div>
    </Container>
  );
}

export default NickName;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
  width: 600px;
`;

const MyNameText = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  svg {
    margin-right: 13px;
    width: 40px;
    height: 40px;
  }
`;

const Subtitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  &::placeholder {
    color: #b4b4b4;
  }
`;
