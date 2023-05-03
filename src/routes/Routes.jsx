import {  createBrowserRouter,} from "react-router-dom";
import Main from "../Layout.jsx/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";

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
     }
    ]
  },
]);

export default router
