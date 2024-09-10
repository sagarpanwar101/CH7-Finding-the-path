import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
     <Outlet />
     <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element:<AppLayout/>,

children:[
  {
    index:true,
    element:<Body/>,
  },
  
    {
      path:"about",
      element:<About/>,
    },
    {
      path:"contact",
      element:<Contact/>,
    },
   ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);