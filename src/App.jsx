import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Main />
      <Routes>
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/single-movie" element={<SingleMovie />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
