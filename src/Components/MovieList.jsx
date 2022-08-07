import { useSelector } from "react-redux";
import Movie from "./Movie";
import styled from "styled-components";

const MovieList = ({active}) => {
  const featureData = useSelector((state) => state.feature);
  const seriesData = useSelector((state) => state.series);
  const isLoading = useSelector((state) => state.isLoading);
  const searched = useSelector((state) => state.search);
  const displayData = active === 'feature' ? featureData : seriesData;
  return (
    <StyledContainer>
      {!searched // if user has searched keyword only search result appear else all the movies appear
        ? !isLoading &&
          displayData.data.results.map((data) => (
            <Movie data={data} key={data.id} active={active} />
          ))
        : searched.data.results.map((data) => (
            <Movie data={data} key={data.id} active={active} />
          ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 3rem 0rem;
  width: 80%;
  min-height: 75vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  column-gap: 5rem;
  row-gap: 3rem;
  margin: auto;
`;

export default MovieList;
