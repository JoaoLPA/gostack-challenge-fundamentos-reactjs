import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}
// ajustar o ativo de acordo com as páginas

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link id={useLocation().pathname === '/' ? 'active' : ''} to="/">
          Listagem
        </Link>
        <Link
          id={useLocation().pathname === '/import' ? 'active' : ''}
          to="/import"
        >
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
