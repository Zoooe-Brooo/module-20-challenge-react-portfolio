import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AboutMePage from './pages/AboutMePage';
import PortfolioPage from './pages/PortfolioPage';
// import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      // {
      //   path: '/contact',
      //   element: <ContactPage />,
      // },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);