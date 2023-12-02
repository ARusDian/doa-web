
import './App.css'
import Home from './pages/Home'
import JuzAmma from './pages/juz-amma'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const BrowserRouter = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/juz-amma", element: <JuzAmma /> },
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
