import { createBrowserRouter } from "react-router";
import Mainlayout from "../../layout/Mainlayout";
import Homepage from "../../pages/Homepage";
import Books from "../../pages/Books";
import Errorelement from "./Errorelement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
    errorElement: <Errorelement/>
  },
]);
