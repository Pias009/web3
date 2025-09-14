import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './pages/Index.tsx';
import NewsPage from './pages/NewsPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import NotFound from './pages/NotFound.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AdminPanel from './pages/AdminPanel.tsx';
import AboutPage from './pages/AboutPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'pias', element: <AdminPanel /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
