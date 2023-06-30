const { default: styled } = require('@emotion/styled');

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;

  .logOutBtn {
    width: 93px;
    height: 31px;
    border: none;
    display: flex;
    outline: none;
    background: ${({ theme }) => theme.mainButton.baseBgColor};
    color: ${({ theme }) => theme.colors.white};
    font-size: 15px;
    border-radius: ${({ theme }) => theme.mainButton.borderRadious};

    box-shadow: ${({ theme }) => theme.baseBoxShadow};
    overflow: hidden;
    border-radius: 17px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: ${({ theme }) => theme.transition};

    :hover {
      background-color: ${({ theme }) => theme.mainButton.activeBgColor};
    }
  }
  .welcomeMessage {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
