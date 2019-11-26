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
  margin-bottom: 1rem;
`;

const NewsContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbnailNewsWrapper = styled.div`
  position: relative;
  width: 18rem;
  height: 12rem;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  transition: background-size 0.1s linear;
  &:hover {
    background-size: 110%;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ThumbnailNewsText = styled.div`
  position: absolute;
  line-height: 1.4rem;
  width: 17rem;
  height: 3rem;
  color: #fff;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
`;
const ThumbnailNewsTextWrapper = styled.div`
  position: absolute;
  width: 18rem;
  height: 4rem;
  background-color: #000;
  opacity: 0.3;
  bottom: 0;
  left: 0;
`;
const NewsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const NewsList = styled.div`
  padding: 0.5rem 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 23.8rem;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NewsContent = () => {
  const [data, dispatch] = useCurrentState();

  return (
    <ContentWrapper>
      <LogoImg src={data.logoImgUrl} />
      <NewsContentWrapper>
        <ThumbnailNewsWrapper src={data.thumbnews.imageUrl}>
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
