import Navigation  from "./Navigation/Navigation";

import { Route } from 'react-router-dom';
import Home from "./views/HomePage";
export const App = () => {
  return (
    <>
      <Navigation />
      
     <Route path="/">
        <Home/>
      </Route> 
      </>
  );
};
