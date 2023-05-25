import React from 'react';
import Main from './pages/Main'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  }
]);


function App() {
  return (
  <>
  <RouterProvider router={router}/>
    <div className="App"/>
  </> 
  )
}
export default App;
