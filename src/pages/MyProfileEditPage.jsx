import React from "react";
import NickName from "../components/edtiprofile/NickName";
import Setting from "../components/edtiprofile/Setting";
import styled from "styled-components";
function MyProfileEditPage(props) {
  return (
    <Container>
      <NickName />
      <Setting />
    </Container>
  );
}

export default MyProfileEditPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
  height: 100%;
  width: 100%;
`;
