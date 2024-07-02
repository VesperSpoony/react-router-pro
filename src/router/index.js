import Login from "../page/Login"
import Article from "../page/Article"
import Layout from "../page/Layout"
import Board from "../page/Layout/Board"
import About from "../page/Layout/About"
import NotFound from "../page/NotFound"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article/:id/:name',
    element: <Article />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // path: '/board',
        element: <Board />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router