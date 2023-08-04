import { Route, Routes, BrowserRouter } from 'react-router-dom';
import OnboardingButton from '../components/common/OnboardingButton';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;