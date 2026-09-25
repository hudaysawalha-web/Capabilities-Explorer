import Brand from "../../Brand/Brand";
import "./HomwNavbar.css";

export default function HomeNavbar() {
  return (
    <div className="Homenavbar">
      <div className="Homenavbar-container">
       
        <Brand/>

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