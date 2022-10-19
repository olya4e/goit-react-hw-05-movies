import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from 'pages/Home/Home';
import {Movies} from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/Moviedetails/MovieDetails';
import { NotFound } from 'pages/NotFound/NotFound';
import { Cast } from 'components/Cast/Cast'
import {Reviews} from 'components/Reviews/Reviews'




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
            <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
   </>
  );
};