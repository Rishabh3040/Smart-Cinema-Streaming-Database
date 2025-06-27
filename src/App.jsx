import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tvshows from "./components/Tvshows";
import People from "./components/People";
import Moviedetails from "./components/Moviedetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";
import About from "./components/About";
import ContactUs from "./components/ContactUs";


function App(){
  return(
    <div className="bg-[#1F1E24] flex w-full h-full">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/movie/details/:id" element={<Moviedetails/>}>


        <Route
        path="/movie/details/:id/trailer" 
        element={<Trailer/>} 
        />
        </Route>
       
        <Route path="/tv" element={<Tvshows/>}>
        </Route>
        <Route path="/tv/details/:id" element={<TvDetails/>}>
        <Route
        path="/tv/details/:id/trailer" 
        element={<Trailer/>} 
        />
        </Route>

        <Route path="/person" element={<People/>}>{" "}
        </Route>
        <Route path="/person/details/:id" element={<PersonDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
       
      </Routes>
      </div>
  )
}

export default App;
