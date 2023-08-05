import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProgressBar from '../components/common/ProgressBar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div style={{width:"350px"}}>
           <ProgressBar max="100" value="75" percent={false} size = 'large' startColor='#00B494' finishColor='#06DCA8'/> 
           <ProgressBar max="100" value="75" percent={false} size = 'small' startColor='#00B494' finishColor='#06DCA8'/> 
        </div>
        

      
      }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;