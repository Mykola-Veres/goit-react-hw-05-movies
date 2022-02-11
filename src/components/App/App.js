import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navigation from "../Navigation";
import { Toaster } from 'react-hot-toast';
import {AppStyled} from "./App.styled";
import Loader from "../Loader";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPageSearch = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const Cast = lazy(() => import("../Cast"));
const Reviews = lazy(() => import("../Reviews"));

export default function App () {
  return(
  <AppStyled>
    <Toaster
      position="top-center"
      reverseOrder={false}/>  
    <Navigation />
    <Suspense fallback={<Loader/>}>
      <Routes>   
        <Route path="/" element={<HomePage/>}/>  
        <Route path="/movies" element={<MoviesPageSearch/>}/>
        <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
          <Route path="/movies/:movieId/cast" element={<Cast/>}/>
          <Route path="/movies/:movieId/reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>   
      </Routes>
    </Suspense>
  </AppStyled>
  )
};
