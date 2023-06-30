import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FormStyled = styled.form`
  position: absolute;
  margin-top: 10px;
  left: 35%;
  top: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  width: 354px;
  height: 500px;
  padding: 20px 36px;

  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;

  border-radius: ${({ theme }) => theme.cardBg.borderRadius};
  background-color: ${({ theme }) => theme.cardBg.backgroundColor};
  backdrop-filter: ${({ theme }) => theme.cardBg.backdropFilter};
  border: ${({ theme }) => theme.cardBg.border};
  box-shadow: ${({ theme }) => theme.cardBg.boxShadow};
  outline: none;
  border: none;

  .title {
    margin-top: 30px;
  }

  .styled-input {
    display: block;
    height: 50px;
    width: 330px;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 21px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
    color: white;
    transition: ${({ theme }) => theme.transition};

    ::placeholder {
      color: rgb(255 255 255 / 69%);
    }

    :focus {
      outline: none;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.4),
        inset -2px -2px 4px rgba(255, 255, 255, 0.5);
    }
  }
  .styled-label {
    display: block;
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
    text-align: left;

    span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
  }
  .loginBtn {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.mainButton.baseBgColor};

    color: ${({ theme }) => theme.colors.white};
    font-size: 22px;
    border-radius: ${({ theme }) => theme.mainButton.borderRadious};

    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border-radius: 17px;
    transition: ${({ theme }) => theme.transition};
    :hover {
      background-color: ${({ theme }) => theme.mainButton.activeBgColor};
    }
  }
  .welcomeMessage {
    font-size: 15px;
  }
`;
export const StyledLink = styled(NavLink)`
  color: #e72eff;
  font-size: 15px;
  position: relative;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  font-weight: 700;
  margin-left: 10px;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: #fd219d;
  }
`;
