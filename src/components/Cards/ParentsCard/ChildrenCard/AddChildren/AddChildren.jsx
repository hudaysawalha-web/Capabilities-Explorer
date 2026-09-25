import "./AddChildren.css";

export default function AddChildren() {
  return (
    <div className="childModalOverlay">
      <div className="childModal">

        <button
          type="button"
          className="closeModal"
          aria-label="إغلاق"
        >
          ×
        </button>

        <h2 className="modalTitle">إضافة ملف طفل جديد</h2>

        <form id="form" className="childForm">

          <div className="formGroup fullWidth">
            <label htmlFor="name">
              اسم الطفل
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder=""
            />
          </div>


          <div className="formRow">

            <div className="formGroup">
  <label htmlFor="birth">
    تاريخ الميلاد
  </label>

  <div className="dateInputWrapper">
    <input
      id="birth"
      type="date"
      min="2015-09-25"
      max="2024-09-25"
      required
    />
  </div>
</div>


            <div className="formGroup">
  <label htmlFor="developmentalAge">
    العمر النمائي المقدر
  </label>

  <input
    id="developmentalAge"
    type="number"
    min="2"
    max="10"
    step="1"
    inputMode="numeric"
    placeholder="اختياري"
  />
</div>

          </div>


          <div className="formGroup genderGroup">
            <label htmlFor="gender">
              الجنس
            </label>

            <select
              id="gender"
              required
              defaultValue="ولد"
            >
              <option value="ولد">
                ولد
              </option>

              <option value="بنت">
                بنت
              </option>
            </select>
          </div>


          <div
            id="formError"
            className="error"
          ></div>


          <div className="modalActions">

            <button
              id="save"
              className="saveButton"
              type="submit"
            >
              حفظ
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}