import Navigation  from "./Navigation/Navigation";

import { Route } from 'react-router-dom';
import Home from "./views/HomePage";
export const App = () => {
  return (
    <>
      <Navigation />
      <h2>Hello</h2>
     <Route path="/">
        <Home/>
      </Route> 
      </>
  );
};
