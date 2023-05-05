import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import MainMenu from "../pages/MainMenu/MainMenu";
import PopularRecipe from "../pages/PopularRecipe/PopularRecipe";
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:([
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('https://chef-recipe-server-oliullah1.vercel.app/')
        },
        {
          path:'/:id',
          element:<PrivateRouter><ChefDetails></ChefDetails></PrivateRouter>,
          loader:({params})=>fetch(`https://chef-recipe-server-oliullah1.vercel.app/${params.id.slice(1)}`)
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
        },
        {
          path:'/menulist',
          element:<MainMenu></MainMenu>
        },
        {
          path:'/recipe',
          element:<PopularRecipe></PopularRecipe>
        }
      ])
    }
  ])

  export default router;