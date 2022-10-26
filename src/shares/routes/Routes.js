import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/blog/Blog";
import Courses from "../../pages/courses/Courses";
import Faq from "../../pages/faq/Faq";
import SingleCart from "../../pages/singleCart/SingleCart";
import Leftpage from "../left/Leftpage";

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
            }
        ]
    }
])