import React from "react";
import styled from "styled-components";

import { Arrow } from "../../../../lib/icons.js";

const NavLeftWrapper = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
`;
const NewsStand = styled.div`
  padding: 0 1rem;
  font-weight: bold;
`;
const WholePress = styled.div`
  padding: 0 1.5rem;
  color: #666;
`;
const Divider = styled.div`
  border-right: 1px solid #666;
  height: 1.5rem;
`;

const NewsTask = () => {
  return (
    <NavLeftWrapper>
      <NewsStand>뉴스스탠드</NewsStand>
      <Arrow />
      <WholePress>전체 언론사</WholePress>
      <Divider />
    </NavLeftWrapper>
  );
};

export default NewsTask;
