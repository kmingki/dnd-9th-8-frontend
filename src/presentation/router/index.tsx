import { Route, Routes, BrowserRouter } from 'react-router-dom';
import OnboardingButton from '../components/common/OnboardingButton';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{width : '170px'}}><OnboardingButton isChecked={false} text={'해외여행'}/></div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;