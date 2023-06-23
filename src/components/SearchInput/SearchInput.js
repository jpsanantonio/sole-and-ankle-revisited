import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';

import VisuallyHidden from '../VisuallyHidden';
import Icon from '../Icon';

const SearchInput = ({ label, ...delegated }) => {
  return (
    <Label>
      <VisuallyHidden>Search</VisuallyHidden>
      <Input
        {...delegated}
        placeholder="Search…"
        style={{
          '--border-color': COLORS.gray[300],
          '--input-color': COLORS.gray[100],
          '--placeholder-color': COLORS.gray[500],
        }}
      />
      <SearchIcon id="search" strokeWidth={1} size={16} />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid var(--border-color);
  padding-left: 24px;
  font-size: 0.875rem;
  color: var(--input-color);
  outline-offset: 4px;

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 16px;
  height: 16px;
`;

export default SearchInput;
