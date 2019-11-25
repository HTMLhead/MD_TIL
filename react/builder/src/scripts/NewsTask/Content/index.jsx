import React from "react";
import styled from "styled-components";
import List from "./List/index.jsx";
import NewsContent from "./NewsContent/index.jsx";

const ContentWrapper = styled.div`
  display: flex;
  width: 65rem;
  border-bottom: 1px solid #666;
  border-right: 1px solid #666;
  border-left: 1px solid #666;
`;

const Content = () => {
  return (
    <ContentWrapper>
      <List />
      <NewsContent />
    </ContentWrapper>
  );
};

export default Content;
