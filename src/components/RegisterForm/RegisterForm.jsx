import { Container } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { FormStyled, StyledLink } from './RegisterForm.styled';
import { TiArrowRight } from 'react-icons/ti';

import {
  RiLockPasswordFill,
  RiLoginCircleFill,
  RiMailFill,
} from 'react-icons/ri';

function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.login.value;
    const password = e.currentTarget.elements.password.value;
    const email = e.currentTarget.elements.email.value;
    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };
  return (
    <Container>
      <FormStyled onSubmit={handleFormSubmit}>
        <h2 className="title">Sign up</h2>
        <label className="styled-label">
          <span>
            <RiMailFill size={17} />
            E-mail
          </span>
          <input
            className="styled-input"
            type="e-mail"
            name="email"
            placeholder="Enter your e-mail adress"
            required
          />
        </label>
        <label className="styled-label">
          <span>
            <RiLoginCircleFill size={17} />
            Login
          </span>
          <input
            className="styled-input"
            type="text"
            name="login"
            placeholder="Think of your username"
            required
          />
        </label>
        <label className="styled-label">
          <span>
            <RiLockPasswordFill size={17} />
            Password
          </span>
          <input
            className="styled-input"
            type="password"
            name="password"
            placeholder="Think of a strong password of at least 7 characters"
            required
          />
        </label>
        <button className="regBtn" type="submit">
          Create account
        </button>
        <p className="welcomeMessage">
          Already have an account?
          <StyledLink to="/login">
            Sign in <TiArrowRight size={17} />{' '}
          </StyledLink>
        </p>
      </FormStyled>
    </Container>
  );
}

export default RegisterForm;
