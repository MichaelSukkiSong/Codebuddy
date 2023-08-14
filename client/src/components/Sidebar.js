import './Sidebar.scss';
import { clearMessagesExceptOne } from '../store';
import { useDispatch } from 'react-redux';
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

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleSidebarClick = () => {
    dispatch(clearMessagesExceptOne());
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
            to="syntax"
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
            to="findError"
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
            to="questionmark"
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
            to="efficiency"
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
            to="testcode"
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
    </div>
  );
};

export default Sidebar;
