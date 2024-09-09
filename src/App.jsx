import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/signup";
import { ErrorPage } from "./components/route-handling/ErrorPage";
import { LoadingPage } from "./components/route-handling/LoadingPage";
import HomePage from "./pages/home";
import LostItemsPage from "./pages/lost-items";
import ViewItemsPage from "./pages/view-items";
import AboutUsPage from "./pages/about-us";
import Records from "./pages/records";

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
      path: "/view-items",
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
