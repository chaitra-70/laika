import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
     
      <div className="space-bg">
        <div className="stars"></div>
        <div className="nebula"></div>
      </div>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}