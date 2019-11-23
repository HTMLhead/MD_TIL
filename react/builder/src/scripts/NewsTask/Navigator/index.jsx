import React from "react";
import styled from "styled-components";

import { Arrow } from "../../../lib/icons.js";

const NavWrapper = styled.div`
  display: flex;
  height: 30px;
`;

const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NewsStand = styled.div`
  padding: 0 2px;
`;

const WholePress = styled.div`
  padding: 0 15px;
`;

const Divider = styled.div`
  border-right: 1px solid #000;
  height: 15px;
`;
const NewsTask = () => {
  return (
    <NavWrapper>
      <NavLeftWrapper>
        <NewsStand>뉴스 스탠드</NewsStand>
        <Arrow />
        <WholePress>전체언론사</WholePress>
        <Divider />
      </NavLeftWrapper>
    </NavWrapper>
  );
};

export default NewsTask;
