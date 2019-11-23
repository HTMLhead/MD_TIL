import React from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "styled-icons/boxicons-regular";

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
`;

const EachBtnWrapper = styled.div`
  width: 20px;
`;

const ConetnePageMover = () => {
  return (
    <BtnWrapper>
      <EachBtnWrapper>
        <LeftArrow />
      </EachBtnWrapper>
      <EachBtnWrapper>
        <RightArrow />
      </EachBtnWrapper>
    </BtnWrapper>
  );
};

export default ConetnePageMover;
