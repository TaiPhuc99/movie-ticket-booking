import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import LayoutBooking from "./layout/LayoutBooking";
import BookingPage from "./pages/BookingPage";
import DetailMoviePage from "./pages/DetailMoviePage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerTemplate from "./templates/SpinnerTemplate";
import ProfilePage from "./pages/ProfilePage";
import ProfileUpdatePage from "./pages/ProfileUpdatePage";

function App() {
  return (
    <>
      <SpinnerTemplate />
      <Router>
        <Routes>
          <Route path="/" element={<Layout Component={<HomePage />} />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/detail/:idMovie"
            element={<Layout Component={<DetailMoviePage />} />}
          />
          <Route
            path="/booking/:idShowtime"
            element={<LayoutBooking Component={<BookingPage />} />}
          />
          <Route
            path="/profile"
            element={<Layout Component={<ProfilePage />} />}
          />
          <Route path="/update-account" element={<ProfileUpdatePage />} />
        </Routes>
      </Router>

      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
