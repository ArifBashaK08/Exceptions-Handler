import { About, Contact, Home, Products, Services, Works } from "./pages"
import { Navbar, Footer } from "./components"
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"

const Layout = () => {

  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/works",
        element: <Works />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]
  },
])

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App
