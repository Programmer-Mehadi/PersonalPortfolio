import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Project from "../pages/Project/Project";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                 
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }, {
                    path: "/projects/:id",
                    loader: ({ params }) => ({ "id": `${ params.id }` }),
                    element: <Project></Project>
                }
            ]
        }
    ]
)
export default router;