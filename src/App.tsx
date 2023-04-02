import React from 'react';
import { ContactInfo } from './components/ContactInfo';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<ContactInfo />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
