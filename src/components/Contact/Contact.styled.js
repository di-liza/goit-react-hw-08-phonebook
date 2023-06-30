import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Item = styled.li`
  width: 100%;
  padding: 5px;
  border-bottom: ${({ theme }) => theme.borders.baseBorder};

  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  margin: 0 auto;
  :nth-last-of-type() {
    margin-bottom: 0px;
  }
  animation: ${slideIn} 0.3s ease-in-out forwards;

  .button {
    display: block;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.beige};
    font-size: 15px;
    border-radius: 40px;
    text-align: center;
    box-shadow: ${({ theme }) => theme.baseBoxShadow};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
  }
  .deleteBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: red;
    }
  }
  .editBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  .saveBtn {
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .callLink {
    width: 30px;
    height: 22px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.beige};
    font-size: 15px;
    border-radius: 40px;
    text-align: center;
    box-shadow: ${({ theme }) => theme.baseBoxShadow};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.green};
    }
  }
  .textWrapper {
    display: flex;
    text-align: left;
    gap: 30px;
  }
  .nameWrap {
    width: 300px;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 29px;
      top: -4px;
      left: 315px;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
  .buttonsWrapper {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }
  .inputName {
    position: relative;

    ::after {
      content: '';
      position: absolute;
      width: 1px;
      height: 29px;
      top: -4px;
      left: 315px;
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }

  .input {
    display: block;
    height: 40px;
    padding: 0;
    width: 264px;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.inputBgColor};
    border-radius: 10px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 300;
    color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: ${({ theme }) => theme.transition};
    border-bottom: ${({ theme }) =>
      `2px  ${theme.colors.inputBorderColor} solid`};

    ::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholderColor};
    }
    :focus {
      outline: none;
      box-shadow: ${({ theme }) => theme.colors.baseBoxShadow};
    }
  }
`;
