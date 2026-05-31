import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🌐 Community Discussion Forum</h2>

      <div>
       <Link to="/">🏠 Home</Link>{" "}
       <Link to="/discussions">💬 Discussions</Link>{" "}
       <Link to="/chat">🔥 Chat</Link>{" "}
       <Link to="/login">👤 Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;