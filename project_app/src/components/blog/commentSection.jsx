import ThumbsUpIcon from "../images/thumbs-up-solid-full.svg.svg";


function CommentSection({ comments, commentText, setCommentText, handleSubmit, handleLike }) {
  return (
    <div id="comment-section" className="comment-section">
        <div className="comment-content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="content"></label>
        <textarea
          id="content"
          name="content"
          rows="4"
          minLength="5"
          required
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit" className="accent-btn">
          POST
        </button>
      </form>

      <div id="posted-comments">
        <h5>Comments!</h5>
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
         <button className="like-btn" onClick={() => handleLike(comment.id)}>
  <img src={ThumbsUpIcon} alt="Like" width={20} height={20} />
  ({comment.likes})
</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CommentSection;

