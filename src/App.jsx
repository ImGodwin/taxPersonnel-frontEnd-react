import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./Components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotFound from "./Components/NotFound";
import Login from "./Components/Login";
import RegisterPage from "./Components/RegisterPage";
import MyPage from "./Components/MyPage";
import CityPersonnel from "./Components/CityPersonnelPage";
import LearnPage from "./Components/LearnPage";
import AboutPage from "./Components/AboutPage";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/me" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/collaborators/:id" element={<CityPersonnel />} />
          <Route path="*" element={<NotFound spacings="mt-5" mainText="404 — Invalid Request" btnVariant="danger" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
