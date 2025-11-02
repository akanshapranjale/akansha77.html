import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", icon: "🏠", link: "#home" },
    { name: "About", icon: "👩‍💻", link: "#about" },
    { name: "Skills", icon: "⚡", link: "#skills" },
    { name: "Projects", icon: "💼", link: "#projects" },
    { name: "Contact", icon: "✉️", link: "#contact" },
  ];

  return (
    <div className="sidebar-container">
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <h1>Portfolio</h1>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={menu.link}>
                <span className="icon">{menu.icon}</span>
                <span className="text">{menu.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Top Navbar appears when sidebar is closed */}
      {!open && (
        <div className="topbar">
          {menus.map((menu, index) => (
            <a key={index} href={menu.link} className="top-link">
              {menu.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
