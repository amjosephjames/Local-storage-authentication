import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUser = async (e) => {
    e.preventDefault();
    await axios
      .post("https://myauth-server.onrender.com/api/user/create", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        window.localStorage.setItem("User", JSON.stringify(res.data.data));

        window.location.reload();

        navigate("/signin");
      });
  };
  return (
    <Container>
      <Card>
        <Cardwrap onSubmit={RegisterUser}>
          <H1>Sign Up</H1>
          <Form>
            <Hold>
              <Label>Username</Label>
              <Input>
                <input
                  type="text"
                  placeholder="fill in your username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </Input>
            </Hold>
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
            <Hold>
              <Label>Confirm Password</Label>
              <Input>
                <input type="text" placeholder="confirm your password" />
              </Input>
            </Hold>
          </Form>

          <Button type="submit">Sign Up</Button>
        </Cardwrap>
      </Card>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Card = styled.div`
  width: 350px;
  height: 570px;
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
  height: 330px;
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
      /* margin-left: 5px; */
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
