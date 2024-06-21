import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "./components/sidebar";
import Covid from "./pages/covid";
import Diabetes from "./pages/diabetes";
import CardioVascular from "./pages/cardio-vascular";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Parser from "./pages/837-parser";
import { useEffect } from "react";
import Risk from "./pages/risk";
import CareJourney from "./pages/care-journey";
const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/covid");
    }
  }, [navigate, pathname]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="">
        <Routes>
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/cardio-vascular" element={<CardioVascular />} />
          <Route path="/837-parser" element={<Parser />} />
          <Route path="/risk" element={<Risk />} />
          <Route path="/care-journey" element={<CareJourney />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
