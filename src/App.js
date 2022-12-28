import logo from './logo.svg';
import './App.css';
import { Button } from 'flowbite-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import AddTask from './Pages/AddTask/AddTask';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/addtask',
      element: <AddTask></AddTask>
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
