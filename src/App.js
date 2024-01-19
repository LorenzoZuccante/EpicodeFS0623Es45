import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Favorites from './components/Favorites';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
