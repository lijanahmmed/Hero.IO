import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
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
            }
        ]
    }
])

export default router;