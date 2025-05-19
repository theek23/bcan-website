import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Front-end/Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Admin Authentication Pages
import Login from './pages/admin/Login';
import Signup from './pages/admin/Signup';

// Admin Dashboard Pages
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Inquiries from './pages/admin/Inquiries';
import Content from './pages/admin/Content';
import BlogView from './pages/BlogView';

// Auth Guard component (replace with your actual auth logic)
const RequireAuth = ({ children }) => {
  // This is a simple example - implement your actual authentication check here
  const isAuthenticated = localStorage.getItem('auth_token');
  
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/admin/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <Routes>
      {/* Public/Front-end Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogView />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Admin Authentication Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/signup" element={<Signup />} />
      
      {/* Protected Admin Routes */}
      <Route path="/admin/dashboard" element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } />
      <Route path="/admin/users" element={
        <RequireAuth>
          <Users />
        </RequireAuth>
      } />
      <Route path="/admin/inquiries" element={
        <RequireAuth>
          <Inquiries />
        </RequireAuth>
      } />
      <Route path="/admin/content" element={
        <RequireAuth>
          <Content />
        </RequireAuth>
      } />
      
      
      {/* <Route path="/admin/dashboard" element={
          <Dashboard />
      } />
      <Route path="/admin/users" element={
          <Users />
      } />
      <Route path="/admin/inquiries" element={
          <Inquiries />
      } />
      <Route path="/admin/content" element={
          <Content />
      } /> */}

      {/* Catch-all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;