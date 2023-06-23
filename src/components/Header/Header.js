import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <HeaderWrapper>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
      <ShoppingBagButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </ShoppingBagButton>
      <SearchButton>
        <Icon id="search" strokeWidth={1} />
      </SearchButton>
      <MenuButton onClick={() => setShowMobileMenu(true)}>
        <Icon id="menu" strokeWidth={1} />
      </MenuButton>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  min-width: calc(300 / 16 * 1rem);

  @media ${QUERIES.phoneAndBelow} {
    position: relative;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.phoneAndBelow} {
    padding: 16px 20px;
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media ${QUERIES.tabletAndBelow} {
    padding: 20px 32px;
    border-top: 4px solid ${COLORS.gray[900]};
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
    position: absolute;
    top: 28px;
    right: calc(100 / 16 * 1rem);
  }
`;

const SearchButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
    position: absolute;
    top: 28px;
    right: calc(60 / 16 * 1rem);
  }
`;

const MenuButton = styled(UnstyledButton)`
  display: none;

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
    position: absolute;
    top: 28px;
    right: calc(20 / 16 * 1rem);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 7vw - 3rem, 4rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
