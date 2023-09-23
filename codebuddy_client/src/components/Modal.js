import './Modal.scss';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content--form">
          <div className="modal__content--form-name">
            <label>Name</label>
            <input />
          </div>
          <div className="modal__content--form-prompt">
            <label>Prompt</label>
            <textarea />
          </div>
        </div>
        <div className="modal__content--btn">
          <button>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
