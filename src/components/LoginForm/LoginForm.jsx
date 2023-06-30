import { Container } from 'components';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operation';
import { FormStyled, StyledLink } from './LoginForm.styled';

import { TiArrowRight } from 'react-icons/ti';
import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';

function LoginForm() {
  const dispatch = useDispatch();
  const handleFormSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(login({ email, password }));

    e.currentTarget.reset();
  };

  return (
    <Container>
      <FormStyled onSubmit={handleFormSubmit}>
        <h2 className="title">Sing in</h2>
        <label className="styled-label">
          <span>
            <RiMailFill size={17} />
            E-mail
          </span>
          <input
            className="styled-input"
            type="text"
            name="email"
            placeholder="Enter your e-mail adress"
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
            placeholder="Enter your password"
          />
        </label>
        <button className="loginBtn" type="submit">
          Sing in
        </button>
        <p className="welcomeMessage">
          New to Phone Book?
          <StyledLink to="/register">
            Create an account <TiArrowRight size={20} />
          </StyledLink>
        </p>
      </FormStyled>
    </Container>
  );
}

export default LoginForm;
