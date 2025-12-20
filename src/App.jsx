import Calculator from "./components/pages/Calculator/Calculator";
import LoadingScreen from "./components/LoadingScreen";
import Prank from "./components/Prank";
import Home from "./components/pages/home/Home";
import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

function LoadingRoute() {
  const navigate = useNavigate();
  return <LoadingScreen onDone={() => navigate("/prank")} />;
}

function PrankRoute() {
  const navigate = useNavigate();
  return <Prank onRestart={() => navigate("/")} />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loading" element={<LoadingRoute />} />
        <Route path="/prank" element={<PrankRoute />} />
        <Route path="*" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
