import React from "react";
import styled from "styled-components";

const ArrowIcon = styled.svg`
  width: 5px;
  height: 5px;
  border-top: 3px solid #000;
  border-right: 3px solid #000;
  border-radius: 1px;
  transform: rotate(45deg);
  margin-right: 5px;
`;

const Arrow = () => {
  return <ArrowIcon />;
};

export { Arrow };
