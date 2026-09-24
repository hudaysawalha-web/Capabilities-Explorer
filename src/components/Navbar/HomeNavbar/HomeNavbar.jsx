import "./HomwNavbar.css";

export default function HomeNavbar() {
  return (
    <div className="Homenavbar">
      <div className="site-logo">
        <div className="brain-icon">
          <i className="fa-solid fa-brain"></i>
        </div>
        <h1> Early Step</h1>
      </div>

      <div className="navbar-links">
        <a href="./pages/auth/login.html" className="login-link">
          تسجيل الدخول
        </a>

        <a href="./pages/auth/registers.html" className="startnow-button">
          <i className="fa-solid fa-wand-magic-sparkles"></i> 
          <p>ابدأ الآن</p>
         
        </a>
      </div>
    </div>
  );
}
