import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css'
import { store } from './store/store';
import Navbar from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import ProtectedRoute from './utils/ProtectedRoute';

function AppLayout() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  console.log("INSIDE App.tcx", auth)

  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!shouldHideNavbar && <Navbar />}
      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={auth.isAuthenticated ? <Navigate to="/dashboard" /> : <Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={auth.isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/login" element={auth.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          />
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
