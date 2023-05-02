import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:([
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
      ])
    }
  ])

  export default router;