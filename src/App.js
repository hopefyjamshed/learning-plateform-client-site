import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './shares/routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>

  );
}

export default App;
