import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Footer from "Pages/Footer/Footer";
import ProductDetails from "Pages/productDetails/ProductDetails";

// Import your components
const Navbar = lazy(() => import("Pages/Navbar/Navbar"));
// const Notfound = lazy(() => import("./Components/Notfound"));
const Login = lazy(() => import("Pages/login/Login"));
const Signup = lazy(() => import("Pages/Signup/Signup"));
const Forgetpassword = lazy(() =>
  import("Pages/Forgetpassword/Forgetpassword")
);
const Rresetpaswword = lazy(() =>
  import("Pages/Rresetpaswword/Rresetpaswword")
);
const Home = lazy(() => import("Pages/Home/Home"));
const Notfound = lazy(() => import("Pages/Notfound/Notfound"));
const Contact = lazy(() => import("Pages/Contact/Contact"));
const Cart = lazy(() => import("Pages/Cart/Cart"));

function App() {
  const [ShowFooter, setShowFooter] = useState(true);
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="spinner-grow text-success spinner-grow-lg"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Navbar />
      <Routes>
        {["home", "/"].map((path, index) => (
          <Route path={path} element={<Home />} key={index} />
        ))}
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login show={setShowFooter} />} />
        <Route
          path="forgetpassword"
          element={<Forgetpassword show={setShowFooter} />}
        />
        <Route
          path="resetpassword"
          element={<Rresetpaswword show={setShowFooter} />}
        />
        <Route path="signup" element={<Signup show={setShowFooter} />} />
        <Route path="contact" element={<Contact />} />

        <Route path="view/:id" element={<ProductDetails />} />

        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Notfound show={setShowFooter} />} />
      </Routes>
      {ShowFooter ? <Footer /> : ""}
    </Suspense>
  );
}

export default App;
