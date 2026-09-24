import "./ParentSidebar.css";

export default function ParentSidebar() {
  return (
    <div>
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125A4.6 4.6 0 0 0 4 9a4.6 4.6 0 0 0 1.998 3.8A4.6 4.6 0 0 0 4 16a4.6 4.6 0 0 0 4.003 3.875A3 3 0 1 0 12 19" />
              <path d="M12 5a3 3 0 1 1 5.997.125A4.6 4.6 0 0 1 20 9a4.6 4.6 0 0 1-1.998 3.8A4.6 4.6 0 0 1 20 16a4.6 4.6 0 0 1-4.003 3.875A3 3 0 1 1 12 19" />
              <path d="M8 8h.01" />
              <path d="M16 8h.01" />
              <path d="M8 16h.01" />
              <path d="M16 16h.01" />
              <path d="M12 5v14" />
            </svg>
          </div>

          <div className="brand-text">
            <div>مستكشف</div>
            <span>القدرات</span>
          </div>
        </div>


        <div className="profile">

          <div className="avatar">
            ب
          </div>

          <div className="profile-info">
            <div
              className="profile-name"
              id="sidebarUserName"
            >
              جاري التحميل...
            </div>

            <div className="profile-role">
              <span className="status-dot"></span>
              ولي أمر
            </div>
          </div>

        </div>


        <div className="menu-title">
          القائمة الرئيسية
        </div>


        <nav className="nav">

          <a
            href="./dashboard.html"
            className="nav-item active"
          >
            <i data-lucide="layout-dashboard"></i>
            <span>لوحة القيادة</span>
          </a>

          <a
            href="./children.html"
            className="nav-item"
          >
            <i data-lucide="users-round"></i>
            <span>الأطفال</span>
          </a>

          <a
            href="./tests.html"
            className="nav-item"
          >
            <i data-lucide="brain"></i>
            <span>الاختبارات</span>
          </a>

          <a
            href="./games.html"
            className="nav-item"
          >
            <i data-lucide="gamepad-2"></i>
            <span>الألعاب</span>
          </a>

          <a
            href="./reports.html"
            className="nav-item"
          >
            <i data-lucide="file-chart-column"></i>
            <span>التقارير</span>
          </a>

          <a
            href="./Messages.html"
            className="nav-item"
          >
            <i data-lucide="message-circle"></i>
            <span>الرسائل</span>
          </a>

        </nav>


        <div className="logout">

          <a
            href="../../index.html"
            className="nav-item"
          >
            <i data-lucide="log-out"></i>
            <span>تسجيل الخروج</span>
          </a>

        </div>

      </aside>
    </div>
  );
}