import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import VideoDetail from './pages/VideoDetail';
import Root from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/detail/:videoId',
                element: <VideoDetail />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
