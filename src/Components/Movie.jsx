import styled from "styled-components";
import { motion } from "framer-motion";

const Movie = ({ data,active }) => {
  const ratingColor =
    data.vote_average > 7 ? "green" : data.vote_average > 5 ? "orange" : "red";
  return (
    <StyledMovie
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280//${data.poster_path}`}
        alt=""
      />
      <div className="movie-info">
        <h5>{active === 'feature' ? data.original_title : data.name}</h5>
        <p style={{ color: ratingColor }}>{data.vote_average}</p>
      </div>
      <div className="overview">
        <h4>Description</h4>
        <p>{data.overview}</p>
      </div>
    </StyledMovie>
  );
};

export default Movie;

const StyledMovie = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 5px rgb(0 0 0 / 20%);
  background-color: #575b7e;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  &:hover .overview {
    transform: translateY(0%);
  }
  img{
    width: 100%;
    height: 90%;
    object-fit: cover;
  }
  .overview {
    background-color: #fff;
    padding: 2rem;
    position: absolute;
    max-height: 100%;
    overflow: auto;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translateY(101%);
    transition: transform 0.3s ease-in;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    h4 {
      font-size: 1.2rem;
      padding-bottom: 1rem;
    }
  }
  .movie-info {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 2rem 1rem;
    overflow: hidden;
  }
  .movie-info > * {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
  }

  .movie-info p {
    background-color: #22254b;
    border-radius: 3px;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
  }
`;
