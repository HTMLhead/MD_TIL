import React from "react";
import styled from "styled-components";

import ContentViewSelector from "./ContentViewSelector/index.jsx";
import ContentPageMover from "./ContentPageMover/index.jsx";

const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45rem;
`;
const MyNews = styled.div`
  padding: 0 15px;
  font-size: 1.4rem;
  font-weight: bold;
`;

const NewsTask = () => {
  return (
    <NavLeftWrapper>
      <MyNews>MY 뉴스</MyNews>
      <ContentViewSelector />
      <ContentPageMover />
    </NavLeftWrapper>
  );
};

export default NewsTask;
