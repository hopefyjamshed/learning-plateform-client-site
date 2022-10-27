import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './shares/routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Button, InputGroup } from 'react-bootstrap';
import { ThemeContext, themes } from './shares/context/AuthProvider/AuthProvider';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      {/* dark light theme  */}

    </>

  );
}

export default App;
