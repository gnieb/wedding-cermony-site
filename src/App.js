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
import Root from "./routes/root";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/aboutus",
    element: <Us />
  },
  {
    path: "/bridalparty",
    element: <BridalParty />
  }
]);


function App() {
  return (
    <div className="">
      <Nav />
      <MobileNav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
