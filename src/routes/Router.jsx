import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import Flowers from "../components/Flowers/Flowers";
import PageNotFound from "../components/PageNotFound/PageNotFound";


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
            }
        ]
    },
    {
        path: '/*',
        element: <PageNotFound />
    }
])
export default Router;