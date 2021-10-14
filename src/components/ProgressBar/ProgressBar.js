/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: ${4 / 16}rem;
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  overflow: hidden;
  width: ${370 / 16}rem;
`;

const Padding = styled.div`
  border-radius: ${4 / 16}rem;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const Bar = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: var(--progress-value, 0px);
`;

const Small = styled(Wrapper)`
  height: ${8 / 16}rem;
`;

const Medium = styled(Wrapper)`
  height: ${12 / 16}rem;
`;

const Large = styled(Wrapper)`
  border-radius: ${8 / 16}rem;
  height: ${24 / 16}rem;
  padding: 4px;
`;

const SIZES = {
  small: Small,
  medium: Medium,
  large: Large,
};

const ProgressBar = ({ value, size }) => {
  const style = { "--progress-value": value + "%" };

  const Container = SIZES[size];

  return (
    <Container
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      role="progressbar"
    >
      <Padding>
        <Bar style={style} />
      </Padding>
    </Container>
  );
};

export default ProgressBar;
