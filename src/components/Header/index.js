import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

import logo from '../../assets/logo.png';

import { NavContainer } from './styles';

export default function Header() {
  return (
    <NavContainer>
      <img src={logo} alt="goomer" />
      <Link to="/">
        <div>
          <MdHome size={30} color="#333" />
        </div>
      </Link>
    </NavContainer>
  );
}
