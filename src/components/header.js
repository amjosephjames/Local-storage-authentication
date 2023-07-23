import React from "react";
import styled from "styled-components";
import pix from "../components/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={pix} />
        <Navigator>
          <Span>Home</Span>
          <Span>About</Span>
          <Span>Contact</Span>
          <Span>Blog</Span>
          <Span>Help</Span>
          <Spaned to="/signin">Sign In</Spaned>
          <Button to="/signup">Sign Up</Button>
        </Navigator>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.img`
  width: 180px;
  height: 35px;
`;
const Navigator = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Span = styled.div`
  font-size: 13px;
  color: white;
`;
const Spaned = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: white;
`;
const Button = styled(Link)`
  width: 150px;
  text-decoration: none;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background: inherit;
`;
