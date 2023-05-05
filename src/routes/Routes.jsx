import {  createBrowserRouter,} from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../pages/ChefRecipes";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage />,
    children:[
     {
      path:"/",
      element:<Home></Home>
     },
     {
      path:"/blog",
      element:<Blog />
     },
     {
      path:"/login",
      element:<Login />
     }
     ,
     {
      path:"/register",
      element:<Register />
     }
     ,
     {
      path:"/chefrecipes/:id",
      element:<PrivateRoute><ChefRecipes /></PrivateRoute>,
      loader:({params})=>fetch(`https://server-one-psi-90.vercel.app/chef/${params.id}`)
     }
    ]
  },
]);

export default router
