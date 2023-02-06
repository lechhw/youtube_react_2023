import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import VideoDetail from './pages/VideoDetail';
import Videos from './pages/Videos';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Videos />,
            },
            {
                path: 'videos',
                element: <Videos />,
            },
            {
                path: 'videos/:keyword',
                element: <Videos />,
            },
            {
                path: 'videos/watch/:videoId',
                element: <VideoDetail />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
