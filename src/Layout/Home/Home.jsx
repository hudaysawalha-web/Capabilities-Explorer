
import './Home.css'
import heroImage from '../../assets/heroimg.png'
export default function Home() {
  return (
    <div className="home-container">
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-wrap">
          {/* Badge 1 */}
          <div className="float-badge badge-1">
            <div className="badge-icon">🏆</div>

            <div>
              <div>85%+ تحسّن</div>
              <div className="badge-sub">في خلال 3 أشهر</div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src={heroImage}
              alt="طفل وأمه يلعبان معًا"
            />
          </div>

          {/* Badge 2 */}
          <div className="float-badge badge-2">
            <div className="badge-icon">📊</div>

            <div>
              <div>تحليل فوري</div>
              <div className="badge-sub badge-sub-light">
                تقارير ذكاء اصطناعي
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="float-badge badge-3">
            <div className="badge-icon">❤️</div>

            <div>
              <div>آمن 100%</div>
              <div className="badge-sub">خصوصية تامة</div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            اكتشف إمكانات طفلك و
            <br />
            طوّر <span className="highlight">قدراته</span>
            <br />
            بسهولة
          </h1>

          <p className="lead">
            منصة تفاعلية ممتعة مصممة لاكتشاف صعوبات التعلم مبكرًا من خلال ألعاب
            واختبارات ذكية، وتقديم تقارير دقيقة للأهالي والمعلمين.
          </p>

          {/* Features */}
          <ul className="feature-list">
            <li>
              <span>ألعاب واختبارات تفاعلية</span>
              <span className="tick">✓</span>
            </li>

            <li>
              <span>تحليل ذكي ودقيق</span>
              <span className="tick">✓</span>
            </li>

            <li>
              <span>توصيات ومتابعة مستمرة</span>
              <span className="tick">✓</span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="hero-actions">
            <a href="/register" className="btn btn-primary">
              ← سجل مجانًا
            </a>

            <a href="#learn-more" className="btn btn-outline">
              معرفة المزيد
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        اكتشف المزيد
        <span className="chev">⌄</span>
      </div>

      {/* CTA */}
      <section className="cta-banner" id="learn-more">
        <div className="cta-icon">✨</div>

        <h2>جاهز لاكتشاف موهبة طفلك؟</h2>

        <p>
          ابدأ رحلتك المجانية اليوم وأعط طفلك الفرصة ليتألق
        </p>

        <a href="/register" className="btn-cta">
          ← سجل الآن مجانًا
        </a>
      </section>
    </div>
    
  );
}
  


