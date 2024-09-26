import Main from "./components/Main";
import AllProjects from "./components/AllProjects";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/projects",
    element: <AllProjects />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
