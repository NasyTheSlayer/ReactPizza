import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import "./scss/app.scss";
import { MainLayout } from "./layouts/MainLayout";

const Cart = React.lazy(() =>
  import(/* webpackChunkName: "Cart" */ "./pages/Cart").then((module) => ({
    default: module.Cart,
  }))
);

const FullPizza = React.lazy(() =>
  import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza").then(
    (module) => ({ default: module.FullPizza })
  )
);

const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "NotFound" */ "./pages/NotFound").then(
    (module) => ({ default: module.NotFound })
  )
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Сторінка завантажуєтся...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Сторінка завантажуєтся...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Сторінка завантажуєтся...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
