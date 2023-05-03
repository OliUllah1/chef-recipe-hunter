import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:([
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('http://localhost:5000/')
        },
        {
          path:'/:id',
          element:<ChefDetails></ChefDetails>,
          loader:({params})=>fetch(`http://localhost:5000/${params.id.slice(1)}`)
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ])
    }
  ])

  export default router;