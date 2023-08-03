import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.scss';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BlogPages from './pages/BlogPages';
import DetailPages from './pages/DetailPages';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/404',
          element: <NotFound />,
        },
        {
          path: '/c/:slug',
          element: <Product />,
        },
        {
          path: '/blogs/:slug',
          element: <BlogPages />,
        },
        {
          path: '/detail/:slug',
          element: <DetailPages />,
        },
      ],
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
