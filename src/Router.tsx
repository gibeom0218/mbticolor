import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssignColorPage from './pages/AssignColorPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assignColor" element={<AssignColorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
