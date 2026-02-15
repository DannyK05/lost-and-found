import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ApiMessageContextProvider } from "./components/message-banner/context";
import ErrorPage from "./components/route-handling/ErrorPage";
import LoadingPage from "./components/route-handling/LoadingPage";

import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import LostItemsPage from "./pages/lost-items";
import ViewItemsPage from "./pages/view-items";
import Records from "./pages/records";
import AboutUsPage from "./pages/about-us";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthPage type="login" />,
      errorElement: <ErrorPage />,
      loader: LoadingPage,
    },
    {
      path: "/signup",
      element: <AuthPage type="signup" />,
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
      <ApiMessageContextProvider>
        <RouterProvider router={router} />
      </ApiMessageContextProvider>
    </>
  );
}

export default App;
