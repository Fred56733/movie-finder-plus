import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isCollapsed ? ">" : "<"}
      </button>
      {!isCollapsed && (
        <>
          <h2>Movie Finder Plus</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <div className="sidebar-info">
            <p>Welcome to Movie Finder Plus!</p>
            <p>Search, filter, and explore detailed movie information.</p>
            <p>Find your next favorite movie today!</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebar;