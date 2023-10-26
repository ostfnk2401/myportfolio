import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home/Home';
import { Projects } from 'pages/Projects/Projects';
import { RegisterPage } from 'pages/AuthPage/RegisterPage/RegisterPage';
import { PublicRoute } from './Auth/PublicRoute/PublicRoute';
import LoginPage from 'pages/AuthPage/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshing } from 'redux/auth/selectors';
import { createContext, useEffect, useState } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './Auth/PrivateRoute/PrivateRoute';
import GalleryPage from 'pages/GalleryPage/GalleryPage';
import Movies from 'pages/Movies/Movies';
import { Cast } from 'pages/Movies/ Cast/Cast';
import { MovieDetails } from 'pages/Movies/MovieDetails/MovieDetails';
import { Reviews } from 'pages/Movies/Reviews/Reviews';
import { ThemeBox } from './App.styled';

export const ThemeContext = createContext(null);

export const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  const dispatch = useDispatch();
  const isRefresh = useSelector(isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefresh ? (
    <p>Refreshing... </p>
  ) : (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeBox id={theme}>
          <Routes>
            <Route
              path="/"
              element={<Header toggleTheme={toggleTheme} theme={theme} />}
            >
              <Route index element={<Home />} />
              <Route
                path="/register"
                element={
                  <PublicRoute component={<RegisterPage />} redirectTo="/" />
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute component={<LoginPage />} redirectTo="/" />
                }
              />
              <Route
                path="/projects"
                element={
                  <PrivateRoute component={<Projects />} redirectTo="/login" />
                }
              />
              <Route
                path="/gallery"
                element={
                  <PrivateRoute
                    component={<GalleryPage />}
                    redirectTo="/login"
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <PrivateRoute component={<Movies />} redirectTo="/login" />
                }
              />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ThemeBox>
      </ThemeContext.Provider>
    </>
  );
};
