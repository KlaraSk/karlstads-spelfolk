import { useState, createContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import ErrorPage from "./pages/error-page/ErrorPage.jsx";
import HomePage from "./pages/home-page/HomePage.jsx";
import AboutPage from "./pages/about-page/AboutPage.jsx";
import JoinPage from "./pages/join-page/JoinPage.jsx";
import SearchPage from "./pages/search-page/SearchPage.jsx";

const CurrentTuneContext = createContext(null);

function App() {
  const [playList, setPlayList] = useState(null);
  const [currentTune, setCurrentTune] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recording, setRecording] = useState(null);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/om-karlstads-spelfolk", element: <AboutPage /> },
        { path: "/bli-medlem", element: <JoinPage /> },
        { path: "/search", element: <SearchPage /> },
      ],
    },
  ]);
  return (
    <CurrentTuneContext.Provider
      value={{ currentTune, setCurrentTune, recording, setRecording, isPlaying, setIsPlaying, playList, setPlayList }}
    >
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </CurrentTuneContext.Provider>
  );
}

export default App;
export { CurrentTuneContext };
