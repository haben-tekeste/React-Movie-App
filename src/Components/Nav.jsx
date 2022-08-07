import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FetchMovies from "../actions/MoviesAction";
import SearchMovie from "../actions/SearchMovie";

const Nav = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (textInput !== "") {
      dispatch(SearchMovie(textInput,active));
      setTextInput("");
    }
  };
  useEffect(() => {
    dispatch(FetchMovies(1,active));
    // eslint-disable-next-line
  },[active]);
  return (
    <StyledNav>
      <h1>Movies</h1>
      <form action="" onSubmit={submitHandler}>
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            onChange={inputHandler}
            value={textInput}
          />
          <button type="submit">Search</button>
        </div>
        <div className="category">
          <button
            onClick={() => {
              setActive("feature");
            }}
          >
            Feature Movie
          </button>
          <button
            onClick={() => {
              setActive("series");
            }}
          >
            Web Series
          </button>
        </div>
      </form>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.div`
  min-height: 10vh;
  background-color: #373b69;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
  .category > * {
    margin-right: 1rem;
  }
  h1 {
    font-size: 3rem;
    color: #399db9;
    font-weight: 800;
  }
  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    padding: 0.6rem;
    /* border: 2px solid red; */
    .search {
      display: flex;
      width: 30%;
      input {
        font-size: 1.2rem;
      }
    }
    input {
      padding: 1rem 1rem;
      width: 55%;
      border: none;
    }
    button {
      padding: 0.8rem 0.8rem;
      border: none;
      background-color: #399db9;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
`;
