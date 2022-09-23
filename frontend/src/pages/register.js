
import React from 'react';
import RegisterForm from '../components/register/RegisterForm';
import { Container } from "reactstrap";

const Register = () => {
  return (
    <Container className="d-flex flex flex-column align-items-center">
      <RegisterForm />
    </Container>
  );
};

export default Register;