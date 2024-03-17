import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "./common";

const NewsAPIPage = lazy(() => import("./pages/newsapi"));
const GuardianPage = lazy(() => import("./pages/guardianapi"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <NewsAPIPage />
            </Suspense>
          }
        />
        <Route
          path="/guardian"
          element={
            <Suspense fallback={<Loader />}>
              <GuardianPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
