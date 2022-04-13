import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from "./pages/comments/Comments";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ProfileHome from "./pages/profile-page/ProfileHome";

export default function App() {
  return (
    <div className="font-inter">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<ProfileHome />} />
          <Route path="comments" element={<Comments />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
