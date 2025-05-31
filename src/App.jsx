import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import ErrorPage from "./pages/error-page/ErrorPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import AboutPage from "./pages/about-page/AboutPage.jsx";
import JoinPage from "./pages/join-page/JoinPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/om-karlstads-spelfolk", element: <AboutPage /> },
        { path: "/bli-medlem", element: <JoinPage /> },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
