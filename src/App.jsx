import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './components/Routes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Routes />;
    </BrowserRouter>
  );
}

export default App;
