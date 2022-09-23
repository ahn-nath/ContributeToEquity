
import React from "react";
import LoginForm from "../components/login";
import { Container } from "reactstrap";

const Login = () => {
  return (
    <Container className="d-flex flex flex-column align-items-center">
        <LoginForm />
    </Container>

  );
};

export default Login;
