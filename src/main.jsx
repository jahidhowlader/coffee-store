import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import AddCoffee from './page/addCoffee/AddCoffee';
import Home from './page/home/Home';
import ViewCoffee from './page/viewCoffee/ViewCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: 'add-coffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'coffee/:_id',
        element: <ViewCoffee></ViewCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params._id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
