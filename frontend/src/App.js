import CourseDetail from "./CourseDetail";
import CourseList from "./CourseList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/courses",
      children: [
        { index: true, element: <CourseList /> },
        { path: "/courses/:id", element: <CourseDetail /> },
      ],
    },

    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
