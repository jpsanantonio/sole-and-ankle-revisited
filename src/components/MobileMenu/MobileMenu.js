/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS, QUERIES } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu" style={{ '--background-color': COLORS.white }}>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={1} />
        </CloseButton>
        <Nav
          style={{
            '--color': COLORS.gray[900],
            '--active-color': COLORS.secondary,
            '--font-weight': WEIGHTS.medium,
          }}
        >
          <NavItem href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Footer
          style={{
            '--color': COLORS.gray[700],
            '--font-weight': WEIGHTS.normal,
          }}
        >
          <FooterItem href="/terms">Terms and Conditions</FooterItem>
          <FooterItem href="/privacy">Privacy Policy</FooterItem>
          <FooterItem href="/contact">Contact Us</FooterItem>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(220deg 5% 40% / 0.8);

  @media ${QUERIES.tabletAndBelow} {
    display: revert;
  }
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--background-color);
  text-transform: uppercase;
  height: 100%;
  width: 66.66%;
  padding: 26px 26px 32px 32px;
`;

const CloseButton = styled(UnstyledButton)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavItem = styled.a`
  color: var(--color);
  text-decoration: none;
  font-weight: var(--font-weight);

  &:first-of-type {
    color: var(--active-color);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterItem = styled.a`
  color: var(--color);
  text-decoration: none;
  font-weight: var(--font-weight);
`;

export default MobileMenu;
