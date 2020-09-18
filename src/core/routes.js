import React, { lazy, Suspense } from "react";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";

import { BaseSpinner } from "@/components";

const Layout = lazy(() => import("@/layout"));

const Home = lazy(() => import("@/app/home"));
const ProductList = lazy(() => import("@/app/products/list"));
const ProductDetail = lazy(() => import("@/app/products/detail"));
const PaymentSuccess = lazy(() => import("@/app/payments/success"));
const PaymentTransferBank = lazy(() => import("@/app/payments/transfer-bank"));

export const Routes = () => (
  <Suspense fallback={<BaseSpinner />}>
    <ReactRoutes>
      <Route path="/*" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-methods/transfer-bank/:orderId" element={<PaymentTransferBank />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </ReactRoutes>
  </Suspense>
);
