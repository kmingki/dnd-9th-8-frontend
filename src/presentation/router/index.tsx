import { Route, Routes, BrowserRouter } from "react-router-dom";
import TripCreatePage from "../pages/TripCreatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
