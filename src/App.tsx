import Home from './pages/Home';
import JuzAmma from './pages/juz-amma';
import DetailSurah from './pages/juz-amma/detail';
import HijaiyahList from './pages/hijaiyah/HijaiyahList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const BrowserRouter = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/juz-amma", element: <JuzAmma /> },
    { path: "/juz-amma/:id", element: <DetailSurah /> },
  ],
);

function App() {

  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  )
}

export default App
