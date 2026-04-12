import { createBrowserRouter } from "react-router";
import Mainlayout from "../../layout/Mainlayout";
import Homepage from "../../pages/Homepage";
import Books from "../../pages/Books";
import Errorelement from "./Errorelement";
import BookDetails from "../ BookDetails";

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
      {
        path: '/bookDetails/:id',
        Component: BookDetails,
      }
    ],
    errorElement: <Errorelement/>
  },
]);
