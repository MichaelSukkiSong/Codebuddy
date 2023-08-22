import './Dropdown.scss';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import genActionDropdown from '../utilities/genActionDropdown';

const Dropdown = ({ data, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const eventHandler = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', eventHandler);

    return () => {
      document.body.removeEventListener('click', eventHandler);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectClick = (item) => {
    dispatch(genActionDropdown(name)(item.value));
    setSelected(item.label);
    setIsOpen(false);
  };

  const content = data.map((item) => {
    return (
      <div
        onClick={() => handleSelectClick(item)}
        key={item.value}
        className={`dropdown__content__item ${
          selected === item.label ? 'selected' : null
        }`}
      >
        {item.label}
      </div>
    );
  });

  return (
    <>
      <div className="dropdown__name">{name}</div>
      <div
        className={isOpen ? 'dropdown open__dropdown' : 'dropdown'}
        ref={dropdownRef}
      >
        <div
          className={`dropdown__menu ${isOpen ? 'open__menu' : null}`}
          onClick={handleDropdownClick}
        >
          <div className="dropdown__label">{selected}</div>
          <div className="dropdown__icon">
            <BsChevronDown />
          </div>
        </div>
        <div className={`dropdown__content ${isOpen ? 'open__content' : null}`}>
          {isOpen && content}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
