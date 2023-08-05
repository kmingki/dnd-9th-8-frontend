import { Route, Routes, BrowserRouter } from "react-router-dom";
import TripCreatePage from "../pages/TripCreatePage";
import TripDetailPage from "../pages/TripDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
        <Route path="/trip/:trip-id" element={<TripDetailPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
