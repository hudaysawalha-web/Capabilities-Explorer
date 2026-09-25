import "./ChildrenCard.css";

export default function ChildrenCard() {
  return (
    <div className="children-card">

      <div className="child-card-top">

        <div
          id="detailAvatar"
          className="child-avatar"
        >
        </div>


        <div className="child-main-info">

          <div className="child-name-row">

            <h3 id="detailName">
            </h3>

            <div
              className="child-gender"
              id="detailGender"
            >
            </div>

          </div>

        </div>


        <div className="child-actions">

          <button
            type="button"
            className="child-action edit"
            id="editChildBtn"
            title="تعديل بيانات الطفل"
          >

            <i className="fa-solid fa-pen"></i>

            <span>تعديل</span>

          </button>


          <button
            type="button"
            className="child-action delete"
            id="deleteChildBtn"
            title="حذف الطفل"
          >

            <i className="fa-solid fa-trash"></i>

            <span>حذف</span>

          </button>

        </div>

      </div>



      <div className="child-information">


        <div className="info-item">

          <div className="info-icon age">

            <i className="fa-regular fa-clock"></i>

          </div>


          <div className="info-text">

            <span className="info-label">
              العمر :
            </span>

            <strong id="detailAge">
            </strong>

          </div>

        </div>


        <div className="info-divider"></div>


        <div className="info-item">

          <div className="info-icon developmental">

            <i className="fa-solid fa-brain"></i>

          </div>


          <div className="info-text">

            <span className="info-label">
              العمر النمائي :
            </span>

            <strong id="detailDevelopmentalAge">
            </strong>

          </div>

        </div>

      </div>

    </div>
  );
}