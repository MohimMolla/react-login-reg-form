import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Main from './Layout/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,      
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        
      ],
    },
  ]);
  return (
     <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
