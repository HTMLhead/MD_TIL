import React from "react";
import styled from "styled-components";
import useFetch from "../../../../lib/useFecth";
import { useStateValue } from "../../../GlobalStateProvider/index.jsx";

const fetchOption = { method: "GET", mode: "cors" };
const dataUrl =
  "https://gist.githubusercontent.com/crongro/6928f4707c55da24a27e366579c2288e/raw/c288f6ba05b883862c186afcb295bbdde20077ff/newsstand-news-json.js";

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
  const { data, loading, error } = useFetch(dataUrl, fetchOption);
  const [companyList, setCompanyList] = React.useState([]);
  const [{ currentNews }, dispatch] = useStateValue();

  React.useEffect(() => {
    if (loading) return;
    const companies = data.map(newsData => {
      return newsData.company;
    });
    setCompanyList(companies);
  }, [data]);

  const handleClick = ({ target }) => {
    dispatch({ type: "CHANGE_NEWS", args: target.innerText });
  };
  return (
    <ListWrapper>
      {companyList.map(company => (
        <ListItem selected={company === currentNews} onClick={handleClick}>
          {company}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default List;
