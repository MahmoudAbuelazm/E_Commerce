import Footer from "Pages/Footer/Footer";
import Home from "Pages/Home/Home";
import Navabr from "Pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navabr />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
