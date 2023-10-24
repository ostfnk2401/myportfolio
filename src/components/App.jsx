import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home';
import { Projects } from 'pages/Projects';
import { RegisterPage } from 'pages/RegisterPage';
import { PublicRoute } from './PublicRoute/PublicRoute';
import LoginPage from 'pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshing } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefresh ? (
    <p>Refreshing... </p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={<PublicRoute component={<LoginPage />} redirectTo="/" />}
          />
          <Route
            path="/projects"
            element={
              <PrivateRoute component={<Projects />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
