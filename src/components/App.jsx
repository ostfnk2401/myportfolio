import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home';
import { Projects } from 'pages/Projects';
import { RegisterPage } from 'pages/RegisterPage';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { Register } from './Register/Register';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/register"
            element={<PublicRoute component={<Register />} redirectTo="/" />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
