import { NavLink } from 'react-router-dom';
const { default: styled } = require('@emotion/styled');

export const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  justify-content: center;

  transition: ${({ theme }) => theme.transition};

  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fefefe5c;
    top: 80px;
    position: absolute;
    z-index: -10;
  }
  .navigation {
    width: 1000px;
    display: flex;
    gap: 10px;
    padding: 20px;
    position: relative;
    padding: 0 100px;
    align-items: baseline;
    justify-content: space-between;
  }
  .links-box {
    display: flex;
    gap: 22px;
    align-items: center;
  }

  .linksWrapper {
    display: flex;
    gap: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 30px;
  position: relative;
  text-decoration: none;

  transition: ${({ theme }) => theme.transition};

  &.active {
    color: rgb(212 66 213);
  }
  :hover {
    color: rgb(212 66 213);
  }
  .linksWrapper {
    display: flex;
    gap: 20px;
  }
`;

export const AuthLink = styled(NavLink)`
  color: white;
  font-size: 15px;

  text-decoration: none;
  padding: 5px 10px;

  border: 2px solid grey;
  border-radius: 5px;

  transition: ${({ theme }) => theme.transition};

  &.active {
    color: rgb(212 66 213);
    border: 2px solid #6240a9;
  }
  :hover {
    color: rgb(212 66 213);
  }
  .linksWrapper {
    display: flex;
    gap: 20px;
  }
`;
