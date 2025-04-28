import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import CreateProduct from "src/pages/CreateProduct";
import HomePage from "src/pages/HomePage";
import LoginPage from "src/pages/LoginPage";
import NotFoundPage from "src/pages/NotFoundPage";
import SignUpPage from "src/pages/SignUpPage";

// Components
import NavBar from "src/components/NavBar";
import FooterComp from "src/components/FooterComp";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
};

export default App;
