import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfileHome from "./pages/profile-page/ProfileHome";

export default function App() {
  return (
    <div className="font-inter">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<ProfileHome />} />
        </Routes>
      </Router>
    </div>
  );
}
