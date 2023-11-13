import React from 'react'
import FrontPage from './pages/FrontPage.js'
import { Routes, Route} from 'react-router-dom'

const App = () => {
  return (

    //! Sætter en Rute op, så man kan lave undersider i React, lidt indivklet, men det burde virke
    <Routes>
          <Route path='/'element={<FrontPage/>}/>
    </Routes>
  );
}

export default App


//! Prøvede at få det til at virke med Login system osv, det må vi lege med på et andet tidspunkt
// API Key
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlZG9rc3Z5eGl4cmlxa3BjZWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4OTk1NzMsImV4cCI6MjAxNTQ3NTU3M30.Pojn2SHMrtsElufrkNodLi9XxWZeY7CSXD5k49WU5Os

// Project URL
// https://eedoksvyxixriqkpceal.supabase.co