import {createBrowserRouter} from "react-router-dom";
import {App} from "@/components/App/App";
import {Suspense} from "react";
import {Shop} from "@/pages/shop";
import UserCard from "@packages/shared/src/component/UserCard";

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}>
          <Shop />
        </Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}>
          <div style={{color: 'red'}}>
            <h1>second</h1>
            <UserCard username={'Alexander'}/>
          </div>
        </Suspense>
      }
    ]
  }
]

export const router = createBrowserRouter(routes)

export default routes
