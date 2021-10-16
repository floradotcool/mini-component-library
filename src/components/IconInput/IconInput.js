import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    TextInput: {
      "--border-width": 1 + "px",
      "--font-size": 14 / 16 + "rem",
      "--padding": "4px 8px 4px 24px",
    },
    Icon: {
      size: 16,
      strokeWidth: 1,
    },
  },
  large: {
    TextInput: {
      "--border-width": 2 + "px",
      "--font-size": 18 / 16 + "rem",
      "--padding": "6px 8px 6px 36px",
    },
    Icon: {
      size: 24,
      strokeWidth: 2,
    },
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} {...styles.Icon} />
      <TextInput
        placeholder={placeholder}
        style={{ ...styles.TextInput, "--width": width + "px" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
  position: absolute;
  top: 0;
`;

const TextInput = styled.input`
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: inherit;
  font-size: var(--font-size);
  font-weight: bold;
  outline-offset: 2px;
  padding: var(--padding);
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
    opacity: 1;
  }
`;

export default IconInput;
