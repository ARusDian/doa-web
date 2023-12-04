import Home from './pages/Home';
import JuzAmma from './pages/juz-amma';
import DoaList from './pages/doa/DoaList';
import DetailSurah from './pages/juz-amma/detail';
import HijaiyahList from './pages/hijaiyah/HijaiyahList';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const BrowserRouter = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/doa", element: <DoaList /> },
    { path: "/juz-amma", element: <JuzAmma /> },
    { path: "/juz-amma/:id", element: <DetailSurah /> },
    { path: "/hijaiyah", element: <HijaiyahList /> }
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
