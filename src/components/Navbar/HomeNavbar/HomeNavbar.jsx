import React from 'react'
import './HomwNavbar.css'

export default function HomeNavbar() {
  return (
   <div className="navbar">
  <div className="site-logo">
    <div className="brain-icon">
      <i className="fa-solid fa-brain"></i>
    </div>

    <span>مستكشف القدرات</span>
  </div>
  <div className="navbar-links">
    <a href="./pages/auth/login.html" className="login-link">
      تسجيل الدخول
    </a>

    <a href="./pages/auth/registers.html" className="className-button">
      <span>ابدأ الآن</span>
      <i className="fa-solid fa-wand-magic-sparkles"></i>
    </a>
  </div>
</div>
  )
}
