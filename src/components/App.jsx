import Navigation  from "./Navigation/Navigation";

import { Route, Routes } from 'react-router-dom';
import Home from "./views/HomePage";
import Movies from "./views/Movies";
import NotFound from "./views/NotFound";
import Detail from "./views/DetailFilm";
import Author from "./views/Authors";
import Views from "./views/Views";
export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
        <Route path="movies/:filmID" element={<Detail />}>
          <Route path={`authors`} element={<Author />} />
          <Route path={`views`} element={<Views />} />
        </Route>
        
        </Routes>
    </>
  );
};
