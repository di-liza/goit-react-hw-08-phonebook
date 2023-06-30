// import { useLogoutRedirect } from 'hooks/logOutRedirects';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { nameSelector } from 'redux/auth/selectors';
import { UserMenuStyled } from './UserMenu.styled';
import { TiUser } from 'react-icons/ti';
import { HiMiniArrowRightOnRectangle } from 'react-icons/hi2';
function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(nameSelector);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <UserMenuStyled>
        <p className="welcomeMessage">
          <TiUser size={20} /> Welcome:
        </p>
        <p>{userName}</p>
        <button className="logOutBtn" type="button" onClick={handleLogOut}>
          Log out
          <HiMiniArrowRightOnRectangle size={15} />
        </button>
      </UserMenuStyled>
    </>
  );
}

export default UserMenu;
