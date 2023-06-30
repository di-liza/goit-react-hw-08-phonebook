import styled from '@emotion/styled';

export const ContactsWrapper = styled.div`
  height: 500px;
  overflow-y: scroll;
  gap: 10px;
  font-size: 20px;
  height: 550px;
  margin: 30px auto;

  width: 700px;
  border-radius: ${({ theme }) => theme.cardBg.borderRadius};
  background-color: ${({ theme }) => theme.cardBg.backgroundColor};
  backdrop-filter: ${({ theme }) => theme.cardBg.backdropFilter};
  border: ${({ theme }) => theme.cardBg.border};
  box-shadow: ${({ theme }) => theme.cardBg.boxShadow};
  padding: 50px 150px;
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.5px;
  border: none;
  overflow-x: hidden;

  .title {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
  .headerWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
  }
  .addContactBtn {
    display: flex;
    height: 30px;
    align-items: center;
    border: none;
    outline: none;
    color: #988989;
    font-size: 15px;
    border-radius: 40px;
    text-align: center;
    box-shadow: ${({ theme }) => theme.baseBoxShadow};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    :hover {
      background-color: ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
