import React from "react";
import DiscussionCard from "../components/DiscussionCard";

function Dashboard() {
  return (
    <div className="container">
      <h1>Welcome to Community Forum 👋</h1>

      <DiscussionCard
  title="Placement Discussions"
  category="Career"
/>

<DiscussionCard
  title="Coding Help"
  category="Programming"
/>

<DiscussionCard
  title="Academic Doubts"
  category="Education"
/>

<DiscussionCard
  title="Internship Opportunities"
  category="Career"
/>

<DiscussionCard
  title="Project Showcase"
  category="Projects"
/>
    </div>
  );
}

export default Dashboard;