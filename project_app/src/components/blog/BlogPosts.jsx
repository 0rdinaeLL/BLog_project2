import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


 function BlogPosts() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((e) => console.error("Failed to fetch posts:", e));
  }, []);


  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <h2>All Blog Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}
              <p>{post.body.substring(0, 100)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPosts;

