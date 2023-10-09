import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const FakeCreateCustomBtn = () => {
  const navigate = useNavigate();

  const handleFakeCreateCustomBtnClick = () => {
    navigate('/auth/login');
  };

  return (
    <div className="sidebar__btn">
      <button onClick={handleFakeCreateCustomBtnClick}>
        <div className="plus-icon">
          <AiOutlinePlus />
        </div>
        <span>Create Custom Category</span>
      </button>
    </div>
  );
};

export default FakeCreateCustomBtn;
