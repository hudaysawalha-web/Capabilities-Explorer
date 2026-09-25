import "./SpecialistHeroCard.css";

export default function SpecialistHeroCard() {
  return (
    <section className="specialist-hero-card">
      <div className="specialist-hero-content">

       

        <div className="specialist-hero-text">
          <div className="specialist-hero-greeting">
            <i className="fa-solid fa-bolt"></i>
            <span>مساء النور</span>
          </div>

          <div className="specialist-hero-title">
            <span>👋</span>
            <span>زوزو</span>
          </div>

          <div className="specialist-hero-subtitle">
            لوحة الأخصائي — متابعة الأطفال المعينين
          </div>
        </div>
         <div className="specialist-hero-buttons">
          <button className="specialist-hero-button">
            <i className="fa-solid fa-users"></i>
            <span>كل الأطفال</span>
          </button>

          <button className="specialist-hero-button">
            <i className="fa-regular fa-file-lines"></i>
            <span>تقاريري</span>
          </button>
        </div>

      </div>
    </section>
  );
}