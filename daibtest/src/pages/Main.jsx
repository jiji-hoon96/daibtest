import React from "react";
import { Link } from "react-router-dom";
import { HeaderText, HeaderTitle, MainHeader } from "../styles/header-style";
import { FindText, LoginForm } from "../styles/login-style";
import StatusComponent from "../components/StatusComponent";
import { useLocation } from "react-router-dom";

const Main = () => {
  const { pathname } = useLocation();
  return (
    <>
      <StatusComponent pathname={pathname} />
      <MainHeader>
        <HeaderTitle>Welcome to Kokoa Clone</HeaderTitle>
        <HeaderText>
          If you have a Kokoa Account,
          <br /> log in with your email or phone number.
        </HeaderText>
      </MainHeader>
      <LoginForm>
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        <Link to="/chatlist">
          <input type="submit" value="Log In" className="loginInput" />
        </Link>
        <input type="submit" value="Sign Up" className="signInput" />
      </LoginForm>
      <FindText>Find KaKao Account or Password</FindText>
    </>
  );
};

export default Main;
