import React from "react";
import styled from "styled-components";
import { useCurrentState } from "../../../CurrentStateProvider/index.jsx";

const ListWrapper = styled.ul`
  border-right: 1px solid #ccc;
  width: 18rem;
  height: 23rem;
  color: #000;
  overflow: scroll;
  padding: 1rem;
`;

const ListItem = styled.li`
  width: 15rem;
  height: 1.4rem;
  padding: 0.2rem;
  color: ${props => (props.selected ? "#139ffb" : "#666")};
  :hover {
    cursor: pointer;
  }
`;

const List = () => {
  const [data, dispatch] = useCurrentState();

  const handleClick = ({ target }) => {
    dispatch({ type: "CURRENT_NEWS", args: target.innerText });
  };

  const companies = React.useMemo(() => {
    return data.ALL_DATA.map(newsData => {
      return newsData.company;
    });
  }, [data.ALL_DATA]);

  return (
    <ListWrapper>
      {companies.map(company => (
        <ListItem
          key={company}
          selected={company === data.company}
          onClick={handleClick}
        >
          {company}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default List;
