import React from "react";
import LoginCard from "../components/login/LoginCard";
import styled from "styled-components";

function LoginPage(props) {
  return (
    <LoginContainer>
      <LoginCard />
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
  height: 100%;
  width: 100%;
`;
