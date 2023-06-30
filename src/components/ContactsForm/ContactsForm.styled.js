import styled from '@emotion/styled';

export const FormStyled = styled.form`
  position: absolute;
  left: 35%;
  top: 15%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;

  width: 354px;
  height: 500px;
  padding: 20px 36px;

  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.white};

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
    background-color: ${({ theme }) => theme.colors.inputBgColor};
    border-radius: 21px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: 300;
    color: white;

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
    height: 0;
    font-weight: 500;
    margin: 0 auto;

    span {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
  }
  .addBtn {
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.mainButton.baseBgColor};
    color: ${({ theme }) => theme.colors.white};

    font-size: 22px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    border-radius: ${({ theme }) => theme.mainButton.borderRadious};
    transition: ${({ theme }) => theme.transition};

    :hover,
    :focus {
      background-color: ${({ theme }) => theme.mainButton.activeBgColor};
    }
  }
  .input-wrapper {
    width: 260px;
    margin-bottom: 45px;
  }

  .closeModalBtn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    display: flex;
    height: 30px;
    align-items: center;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.beige};
    transition: ${({ theme }) => theme.transition};

    font-size: 15px;
    border-radius: 40px;
    text-align: center;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    :hover {
      background-color: #aeaeae;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
