import Post from "./Pages/Post";
import Viewposts from "./Pages/Viewposts";
import Update from "./Pages/Update";
import Donate from "./Pages/Donate";
import About from "./Components/About/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/Viewposts" element={<Viewposts />} />
        <Route path="/update/:title" element={<Update />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
