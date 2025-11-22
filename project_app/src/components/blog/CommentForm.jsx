import { useState, useContext  } from "react";
import { AuthContext } from "../context/AuthContext";

function CommentForm({ onSubmit }) {
    const [text, setText] = useState("");
 /* const [name, setName] = useState("");*/
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onSubmit(user.username, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Comment!</h3>
      <input
        type="text"
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
