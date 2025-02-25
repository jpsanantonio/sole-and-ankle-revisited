import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper
      style={{
        '--color': COLORS.gray[300],
        '--background-color': COLORS.gray[900],
      }}
    >
      <MarketingMessage style={{ '--color': COLORS.white }}>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color);
  background-color: var(--background-color);
  height: 40px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  color: var(--color);
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
