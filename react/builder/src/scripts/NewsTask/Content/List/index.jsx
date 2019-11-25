import React from "react";
import styled from "styled-components";
import { useCurrentState } from "../../../CurrentStateProvider/index.jsx";

const ListWrapper = styled.ul`
  border-right: 1px solid #ccc;
  width: 150px;
  height: 230px;
  color: #000;
  overflow: scroll;
`;

const ListItem = styled.li`
  width: 150px;
  height: 20px;
  color: ${props => (props.selected ? "red" : "#000")};
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
