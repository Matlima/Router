import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom";

// 2 - página de contato
import Contact from './routes/Contact.jsx';

// 3 - página de erro
import ErrorPage from './routes/ErrorPage.jsx';

// 4 - componente base
import Home from "./routes/Home";


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />
      },

    ]

  },

  //{
  //  path: "contact",
  //  element: <Contact />,
  //},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)