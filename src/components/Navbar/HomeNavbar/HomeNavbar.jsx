import "./HomwNavbar.css";

export default function HomeNavbar() {
  return (
    <div className="Homenavbar">
      <div className="Homenavbar-container">
       
        <div className="site-logo">
          <div className="brain-icon">
            <i className="fa-solid fa-brain"></i>
          </div>
          <span className="logo-title">Early Step</span>
        </div>

        {/* Action Links */}
        <div className="navbar-links">
          <a href="./pages/auth/login.html" className="login-link">
            تسجيل الدخول
          </a>

          <a href="./pages/auth/registers.html" className="startnow-button">
           <i className="fa-solid fa-star"></i>
            <span>ابدأ الآن</span>
          </a>
        </div>
      </div>
    </div>
  );
}