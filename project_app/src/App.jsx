import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import BlogPosts from "./components/blog/BlogPosts";
import About from "./components/pages/About";
import IndividualBlogPost from "./components/blog/IndividualBlogPost";
import ContactPage from "./components/pages/ContactPage";
import "./App.css";


function App() {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/posts" element={<BlogPosts />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<IndividualBlogPost />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
