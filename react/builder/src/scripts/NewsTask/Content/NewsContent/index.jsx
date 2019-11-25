import React from "react";
import styled from "styled-components";
import { useCurrentState } from "../../../CurrentStateProvider/index.jsx";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LogoImg = styled.img`
  width: 3rem;
  height: 1.5rem;
  display: block;
`;

const NewsContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbnailNewsWrapper = styled.div`
  position: relative;
  width: 12rem;
  height: 9rem;
`;

const ThumbnailNewsImg = styled.img`
  width: 12rem;
  height: 9rem;
`;
const ThumbnailNewsText = styled.div`
  position: absolute;
  width: 11rem;
  height: 3rem;
  color: #fff;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
`;
const ThumbnailNewsTextWrapper = styled.div`
  position: absolute;
  width: 12rem;
  height: 4rem;
  background-color: #000;
  opacity: 0.3;
  bottom: 0;
  left: 0;
`;
const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const NewsList = styled.div`
  padding: 0.1rem 0;
`;

const NewsContent = () => {
  const [data, dispatch] = useCurrentState();

  console.log(data);
  return (
    <ContentWrapper>
      <LogoImg src={data.logoImgUrl} />
      <NewsContentWrapper>
        <ThumbnailNewsWrapper>
          <ThumbnailNewsImg src={data.thumbnews.imageUrl} />
          <ThumbnailNewsTextWrapper />
          <ThumbnailNewsText>{data.thumbnews.text}</ThumbnailNewsText>
        </ThumbnailNewsWrapper>
        <NewsListWrapper>
          {data.newslist.map(news => (
            <NewsList key={news}>{news}</NewsList>
          ))}
        </NewsListWrapper>
      </NewsContentWrapper>
    </ContentWrapper>
  );
};

export default NewsContent;
