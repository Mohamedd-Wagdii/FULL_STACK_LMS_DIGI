import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Unauthorized from './pages/Unauthorized';
import Dashboard from './pages/dashboards/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes inside Layout */}
          <Route element={<Layout />}>
            <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
              <Route path="/manager/dashboard" element={<Dashboard />} />
              <Route path="/manager/*" element={<div>Coming soon</div>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
              <Route path="/teacher/dashboard" element={<Dashboard />} />
              <Route path="/teacher/*" element={<div>Coming soon</div>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['student']} />}>
              <Route path="/student/dashboard" element={<Dashboard />} />
              <Route path="/student/*" element={<div>Coming soon</div>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['parent']} />}>
              <Route path="/parent/dashboard" element={<Dashboard />} />
              <Route path="/parent/*" element={<div>Coming soon</div>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
