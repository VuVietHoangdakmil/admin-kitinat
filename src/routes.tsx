import { createBrowserRouter, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { PageCRUD } from "./types/enum";
import Layout from "./components/layout";
const Product = lazy(() => import("./page/Product"));
export const path = {
  product: "/product",
  productView: `/product/${PageCRUD.VIEW}`,
  productCreate: `/product/${PageCRUD.CREATE}`,
  productUpdate: `/product/${PageCRUD.UPDATE}`,

  page: "/page",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: path.product + "/:type",
        element: (
          <Suspense fallback={<></>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: path.page,
        element: (
          <Suspense fallback={<></>}>
            <></>
          </Suspense>
        ),
      },
    ],
  },
]);
export default router;
