import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// 1 - configurando router
import { createBrowserRouter, RouterProvider, Route, Navigate} from "react-router-dom";

// 2 - página de contato
import Contact from './routes/Contact.jsx';

// 3 - página de erro
import ErrorPage from './routes/ErrorPage.jsx';

// 4 - componente base
import Home from "./routes/Home";

// 7 - rota dinamica
import Product from "./routes/Product";

// 8- nested route 
import Info from "./routes/Info";

// 9 - search params
import Search from "./routes/Search";


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
        element: <Contact />,
      },
      // 7 - rota dinamica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - rota dinamica
      {
        path: "products/:id/info",
        element: <Info />,

      },
      // 9 - search
      {
        path: "search",
        element: <Search />,
      },
      // 10 - redirect
      {
        path: "teste",
        element: <Navigate to="/" />
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
