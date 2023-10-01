import './Sidebar.scss';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TbBulb } from 'react-icons/tb';
import { BsSticky } from 'react-icons/bs';
import { LiaEye } from 'react-icons/lia';
import { PiTreeStructureThin } from 'react-icons/pi';
import { SlQuestion } from 'react-icons/sl';
import { BsLightningCharge } from 'react-icons/bs';
import { BsGlobe } from 'react-icons/bs';
import { GrTest } from 'react-icons/gr';
import { TbArrowsExchange } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import { clearMessagesExceptOne } from '../store';
import Modal from './Modal';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.messages.categories);

  const handleSidebarClick = () => {
    dispatch(clearMessagesExceptOne());
  };

  const renderCategories = () => {
    return categories.map((category) => {
      return (
        <li className="category__item" key={category.id}>
          <NavLink className="category__link" to={`categories/${category.id}`}>
            <span>{category.name}</span>
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="."
            end
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <TbBulb />
            </div>
            <span>Help with implementation</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="cantremembersyntax"
            end
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <BsSticky />
            </div>
            <span>Can't remember syntax</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="finderror"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <LiaEye />
            </div>
            <span>Find error</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="datastructuresandalgorithm"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <PiTreeStructureThin />
            </div>
            <span>Data structures/Algorithm</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="whatisthiscodedoing"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <SlQuestion />
            </div>
            <span>What is this code doing</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="moreefficiency"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <BsLightningCharge />
            </div>
            <span>More efficiency</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="usefulinfo"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <BsGlobe />
            </div>
            <span>Useful info & APIs</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="showtestcode"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <GrTest />
            </div>
            <span>Show test code</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink
            className="sidebar__link"
            to="changelanguage"
            onClick={handleSidebarClick}
          >
            <div className="sidebar__icon">
              <TbArrowsExchange />
            </div>
            <span>Change language</span>
          </NavLink>
        </li>
      </ul>
      <ul className="category__list">{renderCategories()}</ul>
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
    </div>
  );
};

export default Sidebar;
