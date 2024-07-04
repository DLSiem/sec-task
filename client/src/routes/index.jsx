import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/useAuth";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

const Routes = () => {
  const token = useAuth();
  // definding public routes accessable to all users
  const routesForPublic = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: (
        <div>
          <h2>Service Page</h2>
        </div>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <div>
          <h2>About Us Page</h2>
        </div>
      ),
    },
  ];

  // defining private routes accessible only to authenticated users

  const routesForPrivate = [
    {
      path: "/",
      element: <ProtectedRoutes />,
      Children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
        {
          path: "/profile",
          element: (
            <div>
              <h2>Profile Page</h2>
            </div>
          ),
        },
        {
          path: "/logout",
          element: (
            <div>
              <h2>Logout Page</h2>
            </div>
          ),
        },
      ],
    },
  ];

  // only for non-authenticated users
  const routesForNonAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <div>
          <h2>Home Page</h2>
        </div>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNonAuthenticatedOnly : []),
    ...routesForPrivate,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
