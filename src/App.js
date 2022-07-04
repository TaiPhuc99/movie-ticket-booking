import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import DetailMoviePage from "./pages/DetailMoviePage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout Component={<HomePage />} />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/detail/:idMovie"
          element={<Layout Component={<DetailMoviePage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
