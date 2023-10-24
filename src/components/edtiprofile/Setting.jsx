import React from "react";
import { BiSolidSmile } from "react-icons/bi";
import styled from "styled-components";
import { settingtagData } from "../../data/mypagedata";
function Setting(props) {
  return (
    <Container>
      <div>
        <MySettingText>
          <BiSolidSmile /> 관심사 설정
        </MySettingText>
        <Subtitle>좋아하시는 책 분야를 선택해 주세요!</Subtitle>
        <TagContainer>
          {settingtagData.map((tag) => {
            return <Tagbox>{tag}</Tagbox>;
          })}
        </TagContainer>
      </div>
    </Container>
  );
}

export default Setting;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
`;

const MySettingText = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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

const TagContainer = styled.div`
  display: flex;
`;

const Tagbox = styled.p`
  border-radius: 43px;
  border: 1px solid #c1c1c1;
  background: #fff;
  text-align: center;
  padding: 10px 10px;
  width: 80px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #37d15d;
  }
`;
