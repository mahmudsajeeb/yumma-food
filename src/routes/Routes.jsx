import {  createBrowserRouter,} from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Login from "../components/Login";
import Register from "../components/Register";
import ChefRecipes from "../pages/ChefRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      element:<ChefRecipes />,
      loader:({params})=>fetch(`https://server-one-psi-90.vercel.app/chef/${params.id}`)
     }
    ]
  },
]);

export default router
