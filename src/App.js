import React from "react";
import { Home } from './pages/Home';
import { Nav } from './components/Nav';
import MobileNav from "./components/MobileNav";
import BridalParty from "./pages/BridalParty";
import Us from "./pages/Us";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import "../src/fonts/AnethaFaithSignaturecopy.otf"

import Ceremony from "./pages/Ceremony";
import ReactHookForm from "./pages/ReactHookForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children : [
       {
    path: "/aboutus",
    element: <Us />
  },
  {
    path: "/bridalparty",
    element: <BridalParty />
  },
  {
    path: "/reacthookform",
    element: <ReactHookForm />
  },
  {
    path: '/ceremony',
    element: <Ceremony />
  }
    ]
  },
 
]);


function App() {
  return (
    <div className="bg-beigey w-screen h-full min-h-screen overflow-x-hidden">
      <Nav />
      <MobileNav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
