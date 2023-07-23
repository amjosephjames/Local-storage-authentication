import React from "react";
import styled from "styled-components";

const Mainscreen = () => {
  return (
    <Container>
      <Text>Welcome </Text>
    </Container>
  );
};
export default Mainscreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Text = styled.div`
  color: white;
  font-size: 25px;
`;
