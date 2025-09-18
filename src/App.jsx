import { useState } from 'react'
import { Provider } from 'react-redux';
import './App.css'
import { store } from './store/store';
import Navbar from './components/header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';


function AppLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}


function App() {
  return (
    <Provider store={store}>
      <Router basename="/react-vite-webapp-0.1">
        <AppLayout />
      </Router>
    </Provider>
  );
}

export default App
