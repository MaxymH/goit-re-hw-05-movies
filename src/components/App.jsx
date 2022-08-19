import { lazy, Suspense } from 'react';


import Navigation  from "./Navigation/Navigation";

import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/HomePage" /* webpackChunkName: 'Home'*/))
const Movies = lazy(() => import("../pages/Movies" /* webpackChunkName: 'Movies'*/))
const NotFound = lazy(() => import("../pages/NotFound" /* webpackChunkName: 'NotFound'*/))
const Cast = lazy(() => import("./Cast" /* webpackChunkName: 'Author'*/))
const Reviews = lazy(() => import("./Reviews" /* webpackChunkName: 'Views'*/))
const Detail = lazy(() => import('../pages/MoveDetailFilm' /* webpackChunkName: 'Detail'*/));
export const App = () => {
  
  return (
    <>
    <Suspense fallback={<p>....Loading</p>}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:filmID" element={<Detail />}>
          <Route path={`cast`} element={<Cast />} />
          <Route path={`reviews`} element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        
        </Routes>
        </Suspense>
    </>
  );
};
