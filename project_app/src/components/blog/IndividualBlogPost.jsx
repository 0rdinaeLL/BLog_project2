import { useParams } from "react-router-dom";
import { useState } from "react";
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

  
  console.log(id, post, comments,author);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPost(postRes.data);

      const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
      setAuthor(authorRes.data);

      const commentsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      setFetchedComments(commentsRes.data);

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

        <CommentForm onSubmit={addComment} />
        <div className="comment-area">
          {comments.length === 0 ? null
          : (
            comments.map((comment) => (
              <div key={comment.id} className="comment">
                <strong>{comment.name}</strong>
                <p>{comment.text}</p>
                <button className="like-btn" onClick={() => handleLike(comment.id)}>
                  👍 ({comment.likes})
                </button>
              </div>
            ))
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

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default IndividualBlogPost;
