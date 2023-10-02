import './Modal.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, removeCategory } from '../store';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [prompt, setPrompt] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    const newCategory = { id: nanoid(), name: name, prompt: prompt };

    dispatch(addCategory(newCategory));

    onClose();
    navigate(`/playground/categories/${newCategory.id}`);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content--form">
          <div className="modal__content--form-name">
            <label>Name</label>
            <input onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className="modal__content--form-prompt">
            <label>Prompt</label>
            <textarea
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
            />
          </div>
        </div>
        <div className="modal__content--btn">
          <button onClick={handleCreateClick}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
