import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {About} from "@/pages/about";

const routers = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/about',
        element: <Suspense fallback={'Loading...'}>
          <About />
        </Suspense>
      },
    ]
  }
]

export const router = createBrowserRouter(routers)

export default routers
