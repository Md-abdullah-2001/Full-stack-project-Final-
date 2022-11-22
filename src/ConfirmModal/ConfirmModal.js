import React from "react";

const ConfirmModal = ({
  title,
  message,
  closeModal,
  successDelete,
  modalData,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline">
              Cancel
            </button>
            <label
              onClick={() => successDelete(modalData)}
              htmlFor="confirm-modal"
              className="btn"
            >
              DeLETE
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
