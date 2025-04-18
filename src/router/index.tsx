import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import HomePage from '../pages/HomePage'
import BookListPage from '../pages/BookListPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Independent full-screen pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Pages using MainLayout */}
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/books"
        element={
          <MainLayout>
            <BookListPage />
          </MainLayout>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
