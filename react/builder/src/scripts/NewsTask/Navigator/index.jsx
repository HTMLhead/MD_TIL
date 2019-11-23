import React from "react";
import styled from "styled-components";

import NavRight from "./NavRight/index.jsx";
import NavLeft from "./NavLeft/index.jsx";

const NavWrapper = styled.div`
  display: flex;
  height: 30px;
`;

const NewsTask = () => {
  return (
    <NavWrapper>
      <NavLeft />
      <NavRight />
    </NavWrapper>
  );
};

export default NewsTask;
