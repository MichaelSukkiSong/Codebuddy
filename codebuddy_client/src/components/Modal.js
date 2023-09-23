import './Modal.scss';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content--form">Some form</div>
        <div className="modal__content--btn">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
