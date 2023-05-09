import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import AddCoffee from './page/addCoffee/AddCoffee';
import Home from './page/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/add-coffee')
      },
      {
        path: 'add-coffee',
        element: <AddCoffee></AddCoffee>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
