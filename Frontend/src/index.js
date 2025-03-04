import "./index.css";
import "./index.css";
import App from "./App";
import React from "react";
import Fido from "./pages/Fido";
import Koodo from "./pages/Koodo";
import Freedom from "./pages/Freedom";
import ReactDOM from "react-dom/client";
import BestPlans from "./pages/BestPlans";
import PageRanking from "./pages/PageRanking";
import reportWebVitals from "./reportWebVitals";
import TextExtractor from "./pages/TextExtractor";
import FrequencyCount from "./pages/FrequencyCount";
import SearchFrequency from "./pages/SearchFrequency";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fido",
    element: <Fido title={"Fido"} />,
  },
  {
    path: "/koodo",
    element: <Koodo title={"Koodo"} />,
  },
  {
    path: "/freedom mobile",
    element: <Freedom title={"Freedom Mobile"} />,
  },
  {
    path: "/page ranking",
    element: <PageRanking title={"Page Ranking"} />,
  },
  {
    path: "/frequency count",
    element: <FrequencyCount title={"Frequency Count"} />,
  },
  {
    path: "/search frequency",
    element: <SearchFrequency title={"Search Frequency"} />,
  },
  {
    path: "/text extractor",
    element: <TextExtractor title={"Text Extractor"} />,
  },
  {
    path: "/best plans",
    element: <BestPlans title={"Best Plans"} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
