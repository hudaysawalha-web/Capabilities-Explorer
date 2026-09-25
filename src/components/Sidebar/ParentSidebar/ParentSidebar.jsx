import React from "react";
import "./ParentSidebar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import {
  faChildren,
  faChartColumn,
  faCommentDots,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Brand from "../../Brand/Brand";
export default function ParentSidebar() {
  return (

    <aside className="parent-sidebar">
      {/* Brand */}
      <div className="brand-header">
        <Brand />
      </div>

      {/* User Profile Card */}
      <div className="profile-card">
        <div className="avatar">A</div>
        <div className="profile-info">
          <div className="profile-name">Abood</div>
          <div className="profile-role">
            
            ولي أمر
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="menu-section">

        <div className="sidebar">
          <NavLink className="nav-item" to="/dashboard">
            <FontAwesomeIcon icon={faChartPie} className="nav-icon" />
            <span>لوحة القيادة</span>
          </NavLink>

          <NavLink className="nav-item" to="/children">
            <FontAwesomeIcon icon={faChildren} className="nav-icon" />
            <span>الأطفال</span>
          </NavLink>

          <NavLink className="nav-item" to="/reports">
            <FontAwesomeIcon icon={faChartColumn} className="nav-icon" />{" "}
            <span>التقارير</span>
          </NavLink>

          <NavLink className="nav-item" to="/messages">
            <FontAwesomeIcon icon={faCommentDots} className="nav-icon" />{" "}
            <span>الرسائل</span>
          </NavLink>
        </div>
      </div>

      {/* Logout Footer */}
      <div className="logout">
        <NavLink  className="nav-item logout-item" to="/">
          <span>تسجيل الخروج</span>
          <FontAwesomeIcon icon={faRightFromBracket} className="nav-icon" />
        </NavLink>
      </div>
    </aside>
  );
}
