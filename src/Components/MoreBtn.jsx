import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FetchMovies from "../actions/MoviesAction";

const MoreBtn = ({active}) => {
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [pageNumber, setPageNumber] = useState(1);
  const btnHandler = (nbr) => {
    dispatch(FetchMovies(nbr,active));
    setPageNumber(parseInt(nbr));
  };
  return (
    <StyledDiv>
      {arr.map((nbr) => (
        <button onClick={()=> btnHandler(nbr)}  className={pageNumber === nbr ? "active" : ""} key={nbr}>{nbr}</button>
      ))}
    </StyledDiv>
  );
};

export default MoreBtn;

const StyledDiv = styled.div`
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.3rem;
  .active {
    background: #7d86da;
  }
  button {
    padding: 1rem 1.5rem;
    cursor: pointer;
    margin: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    background-color: #575b7e;
    border: none;
    box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
    border-radius: 3px;
    color: white;
    &:hover {
      background: #7d86da;
    }
  }
`;
