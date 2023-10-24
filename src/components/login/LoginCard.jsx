import React from "react";
import naverlogo from "../../assets/naverlogo.png";
import googlelogo from "../../assets/Google.png";
import kakaologo from "../../assets/KakaoTalk.png";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";
function LoginCard(props) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const handleLoginBtn = () => {
    setIsLogin(true);
    navigate("/");
  };

  return (
    <LoginCardbox>
      <TitleHeaderContainer>
        <Title>로그인</Title>
        <Subtitle>소셜 로그인으로 BOOKER을 사용해 보세요!</Subtitle>
      </TitleHeaderContainer>

      <KakaoButton
        onClick={() => {
          handleLoginBtn();
        }}
      >
        <img src={kakaologo} alt="kakaologo" />
        카카오로 로그인
      </KakaoButton>
      <NaverButton
        onClick={() => {
          handleLoginBtn();
        }}
      >
        <img src={naverlogo} alt="naverlogo" />
        네이버 로그인
      </NaverButton>
      <GoogleButton
        onClick={() => {
          handleLoginBtn();
        }}
      >
        <img src={googlelogo} alt="googlelogo" />
        구글 로그인
      </GoogleButton>
    </LoginCardbox>
  );
}

export default LoginCard;

const LoginCardbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: 310px;
`;

const TitleHeaderContainer = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #b4b4b4;
  padding-bottom: 30px;
  width: 100%;
`;

const Title = styled.h1`
  color: #344a39;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ButtonStyle = styled.button`
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    align-self: center;
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const KakaoButton = styled(ButtonStyle)`
  background-color: #ffeb00;

  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 40px;
    height: 40px;
    margin-right: 30px;
  }
`;

const NaverButton = styled(ButtonStyle)`
  background-color: #03c75a;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 20px;
    height: 20px;
    margin-right: 50px;
  }
`;

const GoogleButton = styled(ButtonStyle)`
  background-color: white;
  border: 1px solid #e0e0e0;
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  > img {
    width: 40px;
    height: 40px;
    margin-right: 50px;
  }
`;
