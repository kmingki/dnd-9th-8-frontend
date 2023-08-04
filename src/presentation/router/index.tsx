import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Test</div>} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
