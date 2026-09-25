import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="card">
          <h1>نسيت كلمة المرور؟</h1>
          <p className="subtitle">سنرسل لك كوداً على بريدك الإلكتروني</p>

          <form onSubmit={(e) => e.preventDefault()} noValidate>
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

            <button type="submit" className="btn-submit">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <span>إرسال كود التحقق</span>
            </button>
          </form>

          <p className="login-link">
            تذكرت كلمة المرور؟ <a href="/login">سجّل الدخول</a>
          </p>
        </div>
      </div>
    </div>
  );
}