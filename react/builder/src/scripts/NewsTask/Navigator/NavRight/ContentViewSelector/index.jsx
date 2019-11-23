import React from "react";
import styled from "styled-components";
import { List } from "styled-icons/fa-solid";
import { GridAlt } from "styled-icons/boxicons-regular";

const ViewSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  padding: 0 5px;
`;

const ContentViewSelector = () => {
  return (
    <ViewSelectorWrapper>
      <IconWrapper>
        <GridAlt />
      </IconWrapper>
      <IconWrapper>
        <List />
      </IconWrapper>
    </ViewSelectorWrapper>
  );
};

export default ContentViewSelector;
