import React from 'react';
import {
  FaHome,
  FaSignInAlt,
  FaUserAlt,
  FaCircle,
  FaPowerOff,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { Nav } from './styled';
import * as colors from '../../config/colors';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
    toast.success('Usuário deslogado com sucesso');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} />
      </Link>

      <Link to="/register">
        <FaUserAlt size={30} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={30} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={30} />
        </Link>
      )}

      {isLoggedIn ? (
        <FaCircle size={30} color={colors.logged} />
      ) : (
        <FaCircle size={30} color={colors.notLogged} />
      )}
    </Nav>
  );
}
