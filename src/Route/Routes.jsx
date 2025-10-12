import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Components/AppDetails";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        hydrateFallbackElement: <p>loading....</p>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installations',
                Component: Installations
            },
            {
                path: '*',
                Component: ErrorPage
            },
            {
                path: '/apps/:id',
                Component: AppDetails
            }
        ]
    }
])

export default router;