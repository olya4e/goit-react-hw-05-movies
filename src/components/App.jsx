import {lazy, Suspense} from 'react';
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";

import { Cast } from 'components/Cast/Cast'
import {Reviews} from 'components/Reviews/Reviews'

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/Moviedetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));



export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:id" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<Reviews/> }/>
            </Route>
            <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
   </>
  );
};
