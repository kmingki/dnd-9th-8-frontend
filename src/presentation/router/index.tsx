import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TripCreatePage from "../pages/TripCreatePage";
import LoginCompletePage from "../pages/LoginComplatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/complete" element={<LoginCompletePage />} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
