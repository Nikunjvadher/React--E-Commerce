import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: #e6dfdf;
  ${mobile({
      width: "70%",
    })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  gap: 1em;
  margin-top: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  /* margin: 20px 10px; */
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: none;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  /* margin: 5px 0; */
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: teal;
`;

const Error = styled.span`
  color: red;

`

const Login = () => {
  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching , error} = useSelector(state=> state.user)

  const handleClick = e => {
    e.preventDefault();
    login(dispatch , {username,password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={e=> setUsername(e.target.value)}/>
          <Input placeholder="password" type="password" onChange={e=> setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went Wrong....</Error>}
          <Link>Forgot Your Password?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
