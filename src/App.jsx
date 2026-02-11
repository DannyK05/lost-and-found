import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./components/route-handling/ErrorPage";
import LoadingPage from "./components/route-handling/LoadingPage";

import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import HomePage from "./pages/home";
import LostItemsPage from "./pages/lost-items";
import ViewItemsPage from "./pages/view-items";
import Records from "./pages/records";
import AboutUsPage from "./pages/about-us";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/home",
      element: <HomePage />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/about-us",
      element: <AboutUsPage />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/lost-items",
      element: <LostItemsPage />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/found-items",
      element: <ViewItemsPage />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/records",
      element: <Records />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
