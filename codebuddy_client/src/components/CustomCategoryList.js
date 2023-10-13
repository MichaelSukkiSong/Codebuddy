import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFetchCategoriesQuery, useRemoveCategoryMutation } from '../store';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
import Modal from './Modal';

const CustomCategoryList = ({ setCategories }) => {
  const [showModal, setShowModal] = useState(false);
  const { data: categories } = useFetchCategoriesQuery();
  const [removeCategory] = useRemoveCategoryMutation();
  const navigate = useNavigate();

  useEffect(() => {
    setCategories(categories);
  }, [categories, setCategories]);

  if (!categories) {
    return null;
  }

  const handleCategoryDeleteClick = (event, category) => {
    removeCategory(category);
    navigate('/playground');
  };

  const renderCategories = categories.map((category) => {
    if (!categories) {
      return null;
    }
    return (
      <li className="category__item" key={category.id}>
        <NavLink className="category__link" to={`categories/${category.id}`}>
          <span>{category.name}</span>
        </NavLink>
        <div
          className="category__del-btn"
          onClick={(event) => handleCategoryDeleteClick(event, category)}
        >
          <RxCrossCircled />
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className="category__list">{renderCategories}</ul>
      <div className="sidebar__btn">
        <button onClick={() => setShowModal(true)}>
          <div className="plus-icon">
            <AiOutlinePlus />
          </div>
          <span>Create Custom Category</span>
        </button>
        {showModal &&
          createPortal(
            <Modal onClose={() => setShowModal(false)} />,
            document.body
          )}
      </div>
    </>
  );
};

export default CustomCategoryList;
