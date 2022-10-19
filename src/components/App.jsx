import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import {Home} from 'pages/Home';

export const App = () => {
  return (
  <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:id" element={<div>MovieDetalies</div>}>
              <Route path="cast" element={<div>Cast</div>} />
              <Route path="reviews" element={<div>Reviews</div> }/>
            </Route>
            <Route path="*" element={<div>Not Found</div>}/>
        </Route>
      </Routes>
   </>
  );
};
