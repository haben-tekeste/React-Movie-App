import GlobalStyle from "./Components/GlobalStyles";
import Nav from "./Components/Nav";
import MovieList from "./Components/MovieList";
import MoreBtn from "./Components/MoreBtn";
import { useState } from "react";

function App() {
  const [active, setActive] = useState('feature');
  
  return (
    <>
      <GlobalStyle />
      <Nav active={active} setActive={setActive}/>
      <MovieList active={active}/>
      <MoreBtn active={active}/>
    </>
  );
}

export default App;
