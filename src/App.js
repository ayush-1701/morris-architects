import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link, Router, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home';
import About from './About/about';
import ContactUs from './ContactUs/contactUs';
import NoPage from './noPage/noPage';
// import { Route, Routes } from "react-router-dom";

function App() {
  const location = useLocation();

  const validRoutes = ['/', '/home', '/about', '/contactUs'];

  const isValidRoute = validRoutes.includes(location.pathname);

  return (
    // <BrowserRouter>
      <div>
        {isValidRoute && <Header />}
        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        {/* <Home /> */}
      </div>
    // </BrowserRouter>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
