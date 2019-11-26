import React from "react";
import styled from "styled-components";
import { LeftArrow, RightArrow } from "styled-icons/boxicons-regular";
import { useCurrentState } from "../../../../CurrentStateProvider/index.jsx";

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
    cursor: pointer;
  }
`;

const ConetnePageMover = () => {
  const [data, dispatch] = useCurrentState();

  const changeNewsHandler = btnCase => {
    let isNext;
    if (btnCase === "next") isNext = 1;
    if (btnCase === "prev") isNext = -1;
    data.ALL_DATA.find((newsList, i) => {
      if (newsList.id === data.id) {
        let resultIndex = i + isNext;
        if (resultIndex > data.ALL_DATA.length - 1) resultIndex = 0;
        if (resultIndex < 0) resultIndex = data.ALL_DATA.length - 1;
        dispatch({
          type: "CURRENT_NEWS",
          args: data.ALL_DATA[resultIndex].company
        });
      }
    });
  };
  return (
    <BtnWrapper>
      <EachBtnWrapper onClick={() => changeNewsHandler("prev")}>
        <LeftArrow style={{ width: "2rem" }} />
      </EachBtnWrapper>
      <EachBtnWrapper onClick={() => changeNewsHandler("next")}>
        <RightArrow style={{ width: "2rem" }} />
      </EachBtnWrapper>
    </BtnWrapper>
  );
};

export default ConetnePageMover;
