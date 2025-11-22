import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../common/Header";
import Footer from "../common/Footer";
import CommentForm from "./CommentForm";
import { useEffect} from "react";
import axios from "axios";

function IndividualBlogPost() {
  const { id } = useParams();
   const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchedComments, setFetchedComments] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  
  console.log(id, post, comments,author);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(postRes.data);

      const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
      setAuthor(authorRes.data);

      const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setFetchedComments(commentsRes.data.map(c => ({ ...c, likes: 0 })));

      setLoading(false);
    } catch (e) {
      console.error("Error fetching data:", e);
      setLoading(false);
    }
  };

  fetchData();
}, [id]);


   const addComment = async (name, text) => {
  if (!name || !text) return;

    const newComment = {
      id: Date.now(),
      name,
      text,
      likes: 0,};

  try {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      postId: id,
      name,
      body: text,
      email: "user@example.com",
    });

    setFetchedComments([...fetchedComments, res.data]);
  } catch (e) {
    console.error("Failed to post comment:", e);
  }
};
  
     const handleLike = (id) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === id
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );

      setComments(prev =>
    prev.map(comment =>
      comment.id === id
        ? { ...comment, likes: comment.likes + 1 }
        : comment
     )
    );
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {post ? (
          <div className="fetched-posts">
            <h2>{post.title}</h2>
            <div className="post-meta">
               <p><strong>Author:</strong> {author?.name}</p>
              <p><strong>Email:</strong> {author?.email}</p>
              <p><strong>Company:</strong> {author?.company?.name}</p>
            </div>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Post not found.</p>
        )}
         
          {/*Only show comment form if logged in */}
        {isAuthenticated ? (
         <CommentForm onSubmit={addComment} />
        ) : (
          <p className="login-message">Please <a href="/login">login</a> to comment.</p>
        )}
          
        <div className="fetched-comments">
       <h3>Comments</h3>
       {fetchedComments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
         ) : (
         fetchedComments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.name}</strong>
            <p>{comment.body}</p>
          </div>
             ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default IndividualBlogPost;
