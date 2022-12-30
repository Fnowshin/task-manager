import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import AddTask from './Pages/AddTask/AddTask';
import MyTask from './Pages/MyTask/MyTasks';
import { Toaster } from 'react-hot-toast';
import CompletedTask from './Pages/CompletedTask/CompletedTask';
import Login from './Pages/Shared/Login';
import Signup from './Pages/Shared/Signup';


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
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/alltask',
      element: <MyTask></MyTask>,
      loader: () => fetch('http://localhost:5000/task')
    },
    {
      path: '/completedtask',
      element: <CompletedTask></CompletedTask>,
      loader: () => fetch('http://localhost:5000/completedTask')
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: "green",
            color: 'white',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: '#FFAE6D',
              secondary: "green",
            },
          },
        }}
      ></Toaster>
    </div>
  );
}

export default App;
