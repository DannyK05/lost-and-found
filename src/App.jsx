import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/signup";
import { ErrorPage } from "./pages/auth/components/route-handling/ErrorPage";
import { LoadingPage } from "./pages/auth/components/route-handling/LoadingPage";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
