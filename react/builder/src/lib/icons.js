import React from "react";
import styled from "styled-components";

const ArrowIcon = styled.svg`
  width: 5px;
  height: 5px;
  border-top: 2px solid #666;
  border-right: 2px solid #666;
  border-radius: 1px;
  transform: rotate(45deg);
  margin-right: 5px;
`;

const Arrow = () => {
  return <ArrowIcon />;
};

export { Arrow };
