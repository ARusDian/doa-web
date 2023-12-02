import Home from './pages/Home';
import JuzAmma from './pages/juz-amma';
import DoaList from './components/DoaList';
import DetailSurah from './pages/juz-amma/detail';
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
