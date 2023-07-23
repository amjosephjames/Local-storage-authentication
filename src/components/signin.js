import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();
    await axios
      .post("https://myauth-server.onrender.com/api/user/signin", {
        email,
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("User", JSON.stringify(res.data.data));

        navigate("/mainscreen");
        window.location.reload();
      })
      .catch((res) => {});
  };

  return (
    <Container>
      <Card>
        <Cardwrap onSubmit={LoginUser}>
          <H1>Sign In</H1>
          <Form>
            <Hold>
              <Label>Email</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </Input>
            </Hold>
            <Hold>
              <Label>Password</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </Input>
            </Hold>
          </Form>

          <Button type="submit">Sign In</Button>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Signin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #020c1b;
`;
const Form = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Hold = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Label = styled.div`
  font-size: 13px;
`;
const Input = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #020c1b;
  padding-left: 3px;
  input {
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: none;
    border: none;
    outline: none;
    ::placeholder {
      color: #020c1b;
      font-size: 10px;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #020c1b;
  color: white;
  font-size: 13px;
`;
