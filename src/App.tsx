import { Reset } from 'styled-reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Router';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000} // 3초 후 자동으로 닫힘
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Reset />
      <Router />
    </>
  );
};

export default App;
