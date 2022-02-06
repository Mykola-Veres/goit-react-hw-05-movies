import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../HomePage";
import MoviesPageSearch from "../MoviesPage";
import MovieDetailsPage from "../MovieDetailsPage";
import { Toaster } from 'react-hot-toast';
import Cast from "../Cast";
import Reviews from "../Reviews";

export default function App () {
  return(
  <main>
    <Toaster
      position="top-center"
      reverseOrder={false}/>  
    <Navigation />
    <Routes>   
      <Route path="/" element={<HomePage/>}/>  
      <Route path="movies" element={<MoviesPageSearch/>}/>
      <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="/movies/:movieId/cast" element={<Cast/>}/>
        <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/"/>}/>   
    </Routes>
  </main>
  )
};
