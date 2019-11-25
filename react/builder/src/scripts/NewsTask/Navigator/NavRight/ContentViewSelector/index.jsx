import React from "react";
import styled from "styled-components";
import { List } from "styled-icons/fa-solid";
import { GridAlt } from "styled-icons/boxicons-regular";

const ViewSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 6rem;
`;

const IconWrapper = styled.div`
  padding: 1rem;
  color: #666;
  &:hover {
    color: #139ffb;
  }
`;

const ContentViewSelector = () => {
  return (
    <ViewSelectorWrapper>
      <IconWrapper>
        <GridAlt style={{ width: "2rem" }} />
      </IconWrapper>
      <IconWrapper>
        <List style={{ width: "2rem" }} />
      </IconWrapper>
    </ViewSelectorWrapper>
  );
};

export default ContentViewSelector;
