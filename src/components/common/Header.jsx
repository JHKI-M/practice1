import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atom";
import swal from "sweetalert";

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  const goReadingPage = () => {
    if (isLogin) {
      navigate("/userbook");
    } else {
      swal({
        title: "로그인이 필요합니다.",
        icon: "warning",
        buttons: "확인",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  const goRecommendPage = () => {
    if (isLogin) {
      navigate("/recommend");
    } else {
      swal({
        title: "로그인이 필요합니다.",
        icon: "warning",
        buttons: "확인",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  const goExchangePage = () => {
    if (isLogin) {
      navigate("/exchange");
    } else {
      swal({
        title: "로그인이 필요합니다.",
        icon: "warning",
        buttons: "확인",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <HeaderWrapper>
      <LinkStyle to="/">
        <img src={logo} alt="logo" />
      </LinkStyle>

      <HeaderRight>
        <HeaderMenuContainer>
          <HeaderMenuText
            onClick={() => {
              goReadingPage();
            }}
          >
            개인서재
          </HeaderMenuText>
          <HeaderMenuText
            onClick={() => {
              goRecommendPage();
            }}
          >
            책 추천
          </HeaderMenuText>
          <HeaderMenuText
            onClick={() => {
              goExchangePage();
            }}
          >
            책 교환
          </HeaderMenuText>
        </HeaderMenuContainer>
        <Search />
        {isLogin ? (
          <>
            <InfoRound
              src={profile}
              onClick={() => {
                navigate("/mypage");
              }}
            ></InfoRound>
            <CustomBtn
              onClick={() => {
                setIsLogin(false);
                navigate("/");
              }}
            >
              로그아웃
            </CustomBtn>
          </>
        ) : (
          <CustomBtn
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </CustomBtn>
        )}
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding-left: 20px; */
  height: 78px;
  border-radius: 20px;
  border-bottom: 1px solid #b8b8b8;
  background: #fff;
  box-shadow: 0px 4px 2px 0px rgba(165, 165, 165, 0.25);
  z-index: 10;
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #212529;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  > img {
    position: absolute;
    top: -23px;
    width: 220px;
    height: 45px;
    object-fit: cover;
  }
`;

const CustomBtn = styled.button`
  height: 3rem;
  margin-left: 2rem;
  margin-right: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;
  border-radius: 1.5rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: #f8f9fa;
  border: 1px solid #344a39;
  color: #344a39;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  &:hover {
    background: #344a39;
    color: #fff;
  }
  /* 미디어쿼리 */
  @media (max-width: 768px) {
    display: none;
  }
`;

const InfoRound = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 2rem;
  @media (max-width: 1068px) {
    display: none;
  }
`;

const HeaderMenuText = styled.p`
  color: #344a39;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    color: #212529;
  }
`;
