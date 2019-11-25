import React from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "styled-icons/boxicons-regular";

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 8rem;
`;

const EachBtnWrapper = styled.div`
  padding: 1rem;
  border-left: 1px solid #666;
  color: #666;
  &:hover {
    color: #139ffb;
  }
`;

const ConetnePageMover = () => {
  return (
    <BtnWrapper>
      <EachBtnWrapper>
        <LeftArrow style={{ width: "2rem" }} />
      </EachBtnWrapper>
      <EachBtnWrapper>
        <RightArrow style={{ width: "2rem" }} />
      </EachBtnWrapper>
    </BtnWrapper>
  );
};

export default ConetnePageMover;
