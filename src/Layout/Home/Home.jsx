import "./Home.css";
import heroImage from "../../assets/heroimg.png";

export default function Home() {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-hero-container">
          {/* Content Column */}
          <div className="home-hero-content">
            <h1>
              اكتشف إمكانات طفلك و
              <span className="highlight-home-wrapper">
                <span className="highlight-text">طوّر قدراته</span>
                <span className="highlight-bg"></span>
              </span>
            </h1>

            <p className="home-hero-description">
              منصة تفاعلية ممتعة مصممة لاكتشاف صعوبات التعلم مبكرًا من خلال
              ألعاب واختبارات ذكية، وتقديم تقارير دقيقة للأهالي والمعلمين.
            </p>

            <ul className="feature-list">
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>ألعاب واختبارات تفاعلية</span>
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>تحليل ذكي ودقيق</span>
              </li>
              <li>
                <svg
                  className="check-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>توصيات ومتابعة مستمرة</span>
              </li>
            </ul>

            <div className="home-hero-actions">
              <a href="/register" className="home-hero-button">
                سجل مجاناً
              </a>

              <a href="#learn-more" className="home-outline-button">
                معرفة المزيد
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="home-hero-visual">
            {/* Badge 1: Trophy Top Right */}
            <div className="float-badge badge-trophy">
              <div className="badge-icon icon-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                  <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                  <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                  <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                </svg>
              </div>
              <div className="badge-text">
                <p className="badge-title">+ 85% تحسّن</p>
                <p className="badge-sub">في خلال 3 أشهر</p>
              </div>
            </div>

            {/* Badge 2: Activity Left Middle */}
            <div className="float-badge badge-activity">
              <div className="badge-text">
                <p className="badge-title">تحليل فوري</p>
                <p className="badge-sub">تقارير ذكاء اصطناعي</p>
              </div>
              <div className="badge-icon icon-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                </svg>
              </div>
            </div>

            {/* Badge 3: Heart Bottom Right */}
            <div className="float-badge badge-heart">
              <div className="badge-icon icon-success">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <div className="badge-text">
                <p className="badge-title">آمن 100%</p>
                <p className="badge-sub">خصوصية تامة</p>
              </div>
            </div>

            {/* Main Image Frame */}
            <div className="home-hero-image-frame">
              <img src={heroImage} alt="طفل يتطوّر ويتعلّم عبر المنصة" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-hero-section" id="learn-more">
        <div className="cta-hero-card">
          <h2>جاهز لاكتشاف موهبة طفلك؟</h2>
          <p>ابدأ رحلتك المجانية اليوم وأعطِ طفلك الفرصة ليتألق</p>
          <button  className="btn-hero-accent">
            سجل الآن مجاناً
          </button>
        </div>
      </section>
    </main>
  );
}
