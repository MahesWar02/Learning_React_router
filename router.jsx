import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import People from "./pages/People";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/people",
    element: <People />,
  },
]);

export default router;
