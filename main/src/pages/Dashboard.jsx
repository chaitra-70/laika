import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <span>SPACE INTELLIGENCE</span>
          <h1>LAIKA</h1>
        </div>
        <div className="nav-links">
          <Link to="/apod">APOD</Link>
          <Link to="/iss">ISS</Link>
          <Link to="/launches">LAUNCHES</Link>
          <Link to="/asteroids">ASTEROIDS</Link>
          <Link to="/spacefeed">NEWS</Link>
        </div>
      </nav>
    </div>
  );
}
export default Dashboard;