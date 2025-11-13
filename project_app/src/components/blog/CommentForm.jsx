import { useState } from "react";

function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    onSubmit(name, text);
    setName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Comment!</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
