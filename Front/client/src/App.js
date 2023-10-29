import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

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

function App() {
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
        <Route path="login" element={<Login />} />
        <Route path="forgetpassword" element={<Forgetpassword />} />
        <Route path="resetpassword" element={<Rresetpaswword />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
