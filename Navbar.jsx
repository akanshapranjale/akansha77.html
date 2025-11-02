// import React from "react";
// import "./Navbar.css";

// function Navbar() {
//   const menus = [
//     { name: "Home", link: "#home" },
//     { name: "About", link: "#about" },
//     { name: "Skills", link: "#skills" },
//     { name: "Projects", link: "#projects" },
//     { name: "Contact", link: "#contact" },
//   ];

//   return (
//     <nav className="navbar">
//       <h2 className="logo">Portfolio</h2>
//       <ul className="nav-links">
//         {menus.map((menu, index) => (
//           <li key={index}>
//             <a href={menu.link}>{menu.name}</a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";

const menus = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Active link on scroll
  useEffect(() => {
    const sections = menus.map((m) => document.querySelector(m.link));
    const onScroll = () => {
      const scrollPos = window.scrollY + 80; // offset for fixed navbar
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (!sec) continue;
        if (sec.offsetTop <= scrollPos) {
          setActive(menus[i].link);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu when link clicked
  const onLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-area">
          <button
            className="sidebar-toggle"
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((s) => !s)}
          >
            {sidebarOpen ? "Hide" : "Show"}
          </button>

          <h2 className="logo">Portfolio</h2>
        </div>

        {/* Desktop nav (hidden when sidebar is open if you prefer) */}
        <ul className={`nav-links ${sidebarOpen ? "hidden-when-sidebar" : ""}`}>
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className={active === menu.link ? "active" : ""}
                onClick={onLinkClick}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          <span />
        </button>
      </nav>

      {/* Sidebar (left) */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className={active === menu.link ? "active" : ""}
                onClick={() => {
                  // For smooth UX: close sidebar on click
                  setSidebarOpen(false);
                }}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile sliding menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          {menus.map((menu) => (
            <li key={menu.name}>
              <a
                href={menu.link}
                className={active === menu.link ? "active" : ""}
                onClick={() => setMobileOpen(false)}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

