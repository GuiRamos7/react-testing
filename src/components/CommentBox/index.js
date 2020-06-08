import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();

    // TODO - Call an action creator
    // And sabe the comment

    setComment('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h4>Add a Comment </h4>
      <textarea onChange={(e) => setComment(e.target.value)} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default CommentBox;
