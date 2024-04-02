import React from "react";

function Task({ text, category, onDelete }) {
  // Trigger the deletion process in the parent component
  const handleDelete = () => {
    onDelete(text, category);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
