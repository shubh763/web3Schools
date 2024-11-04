import React from "react";
import ContactForm from "../component/ContactForm";

const PopupForm = ({ closePopup }) => {
  return (
    <div className="popupOverlay" onClick={closePopup}>
      <div className="popupContent" onClick={(e) => e.stopPropagation()}>
        <button className="closePopupBtn" onClick={closePopup}>
          &times;
        </button>
        <ContactForm />
      </div>
    </div>
  );
};

export default PopupForm;
