import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoApp from "./components/TodoApp";
import { AuthProvider, useAuth } from "./auth/AuthProvider";

const ProtectedRoute = () => {
  const auth = useAuth();
  return auth.isAuthenticated ? <TodoApp /> : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [{ path: "todos", element: <TodoApp /> }],
  },
  { path: "*", element: <Navigate to="/todos" /> },
]);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
