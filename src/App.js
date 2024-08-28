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
// import Root from "./routes/root";
import ErrorPage from "./error-page";
import "../src/fonts/AnethaFaithSignaturecopy.otf"
import Timeline from "./pages/Timeline";
import Ceremony from "./pages/Ceremony";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/aboutus",
    element: <Us />
  },
  {
    path: "/bridalparty",
    element: <BridalParty />
  },
  {
    path: "/timeline",
    element: <Timeline />
  },
  {
    path: '/ceremony',
    element: <Ceremony />
  }
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
