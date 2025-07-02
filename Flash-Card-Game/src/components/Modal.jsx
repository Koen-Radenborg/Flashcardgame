import '../Modal.css';

function Modal({ onClose, title, content, bgColor, borderColor }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal-box"
        style={{ backgroundColor: bgColor, borderColor: borderColor }}
      >
        <h2 className="modal-title">{title}</h2>
        <p className="modal-content">{content}</p>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
