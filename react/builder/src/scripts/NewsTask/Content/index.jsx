import React from "react";
import styled from "styled-components";
import List from "./List/index.jsx";
import NewsContent from "./NewsContent/index.jsx";

const ContentWrapper = styled.div`
  display: flex;
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
