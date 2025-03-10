import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

// Lazy load all pages
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Error = lazy(() => import('./pages/Error'));
const Unauthorized = lazy(() => import('./pages/Unauthorized'));
const Experience = lazy(() => import('./pages/Experience'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/products"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Products />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/blog"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Blog />
                </Suspense>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <BlogPost />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/admin"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Admin />
                </Suspense>
              }
            />
            <Route
              path="/experience"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Experience />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/unauthorized"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Unauthorized />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  </StrictMode>
);