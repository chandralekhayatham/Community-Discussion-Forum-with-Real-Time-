import React from "react";

function DiscussionDetails() {
  return (
    <div className="container">
      <h1>Placement Discussions</h1>

      <div className="card">
        <h3>How to prepare for TCS NQT?</h3>
        <p>
          Share your preparation tips, resources and interview experiences.
        </p>
      </div>

      <h3>Comments</h3>

      <p><strong>Rahul:</strong> Practice aptitude daily.</p>
      <p><strong>Priya:</strong> Focus on coding questions.</p>

      <textarea
        placeholder="Write a comment..."
        rows="4"
        cols="50"
      ></textarea>

      <br /><br />
      <button>Post Comment</button>
    </div>
  );
}

export default DiscussionDetails;