import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import Checkout from "../../pages/checkout/Checkout";
import Courses from "../../pages/courses/Courses";
import ErrorPage from "../../pages/error/ErrorPage";
import Faq from "../../pages/faq/Faq";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import SingleCart from "../../pages/singleCart/SingleCart";
import Leftpage from "../left/Leftpage";
import PrivateRouter from "../Privaterouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>,
                loader: () => fetch('https://learning-platform-server-xi.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/left/:id',
                element: <Leftpage></Leftpage>,

            },
            {
                path: '/single/:id',
                element: <SingleCart></SingleCart>,
                loader: ({ params }) => fetch(`https://learning-platform-server-xi.vercel.app/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRouter>
                    <Checkout></Checkout>
                </PrivateRouter>,
                loader: () => fetch('https://learning-platform-server-xi.vercel.app/courses')
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])