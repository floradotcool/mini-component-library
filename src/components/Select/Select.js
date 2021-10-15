import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <Option>{displayedValue}</Option>
      <Arrow id="chevron-down" size={20} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  position: relative;
  width: max-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeSelect = styled.select`
  bottom: 0;
  cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Option = styled.div`
  padding: 12px 52px 12px 16px;

  select:focus + & {
    outline: 1px dotted black;
  }
`;

const Arrow = styled(Icon)`
  bottom: 0;
  margin: auto;
  right: 14px;
  pointer-events: none;
  position: absolute;
  top: 0;
`;

export default Select;
