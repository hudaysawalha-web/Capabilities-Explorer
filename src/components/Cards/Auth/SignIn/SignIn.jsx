import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faArrowRight,
  faUsers,
  faUserGraduate,
  faBrain,
  faCheck,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import "./SignIn.css";

export default function SignIn() {
  const [accountType, setAccountType] = useState("guardian");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="page-wrapper">
      <div className="container">
        <a href="/" className="back-link">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          <span>العودة للرئيسية</span>
        </a>

        <div className="card">
          <div className="logo-row">
            <div className="logo-icon">
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <div className="logo-text">مستكشف القدرات</div>
          </div>

          <h1>إنشاء حساب جديد</h1>
          <p className="subtitle">انضم إلينا لمساعدة طفلك في رحلة التعلم</p>

          <form id="registerForm" onSubmit={(e) => e.preventDefault()} noValidate>
            <label>نوع الحساب</label>

            <div className="account-types">
              <div
                className={`account-type ${accountType === "guardian" ? "active" : ""}`}
                onClick={() => setAccountType("guardian")}
              >
                {accountType === "guardian" && (
                  <span className="active-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
                <div className="icon">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="title">ولي أمر</div>
                <div className="desc">لمتابعة طفلك</div>
              </div>

              <div
                className={`account-type ${accountType === "teacher" ? "active" : ""}`}
                onClick={() => setAccountType("teacher")}
              >
                {accountType === "teacher" && (
                  <span className="active-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
                <div className="icon">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <div className="title">معلم</div>
                <div className="desc">لمتابعة طلابك</div>
              </div>

              <div
                className={`account-type ${accountType === "specialist" ? "active" : ""}`}
                onClick={() => setAccountType("specialist")}
              >
                {accountType === "specialist" && (
                  <span className="active-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
                <div className="icon">
                  <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="title">أخصائي</div>
                <div className="desc">لتقديم التقييمات</div>
              </div>
            </div>

            <label htmlFor="fullName">الاسم الكامل</label>
            <div className="input-wrap">
              <input type="text" id="fullName" placeholder="محمد أحمد" required />
              <FontAwesomeIcon icon={faUser} className="icon-right" />
            </div>

            <label htmlFor="email">البريد الإلكتروني</label>
            <div className="input-wrap">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                required
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon-right" />
            </div>

            <label htmlFor="password">كلمة المرور</label>
            <div className="input-wrap">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon-right" />
              <button
                type="button"
                className="icon-left"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="إظهار/إخفاء كلمة المرور"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
            <div className="input-wrap">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="••••••••"
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon-right" />
              <button
                type="button"
                className="icon-left"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="إظهار/إخفاء تأكيد كلمة المرور"
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <button type="submit" className="btn-submit">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <span>إنشاء حساب</span>
            </button>
          </form>

          <p className="login-link">
            لديك حساب بالفعل؟ <a href="/login">تسجيل الدخول</a>
          </p>
        </div>
      </div>
    </div>
  );
}