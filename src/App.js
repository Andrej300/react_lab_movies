import MovieBox from "./components/MovieList";
import './App.css';
import React from 'react';



function App() {
  return (
    
    <>
    <h1>Upcoming films in the UK</h1>
    <MovieBox/>
    <footer><a href="https://www.google.com/search?q=upcoming+movies+in+the+uk&rlz=1C5CHFA_enGB927GB927&oq=upcoming+movies+in+the+uk&aqs=chrome..69i57j0i22i30l3j0i390.4423j0j7&sourceid=chrome&ie=UTF-8">View upcoming releases </a> </footer>
    </>
  );
}

export default App;
