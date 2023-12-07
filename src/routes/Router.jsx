import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import Flowers from "../components/Flowers/Flowers";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Contact from "../components/Contact/Contact";
import AboutUs from "../components/AboutUs/AboutUs";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'flowers',
                element: <Flowers />,
                loader: () => fetch('flowers.json')
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <AboutUs />
            }
        ]
    },
    {
        path: '/*',
        element: <PageNotFound />
    }
])
export default Router;