import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes >
            <Route path="/" element={<Dashboard/>} >Dashboard</Route>
            <Route path="/login" element={<Login />}>Login</Route>
            <Route path="/register" element={<Register />}>Register</Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
