import './Menubar.scss';
import Dropdown from './Dropdown';
import Slider from './Slider';

const Menubar = ({ items }) => {
  // items
  // [{type: 'dropdown', data:[{label,value}], name, popupText},{type: 'slider',name, popupText},{}]

  const renderItems = items.map((item) => {
    if (item.type === 'dropdown') {
      return (
        <div className="menubar__item" key={item.name}>
          <div className="menubar__item-dropdown">
            <Dropdown data={item.data} name={item.name} />
          </div>
          <div id="popup-dropdown">{item.popupText}</div>
        </div>
      );
    } else if (item.type === 'slider') {
      return (
        <div className="menubar__item" key={item.name}>
          <div className="menubar__item-slider">
            <Slider name={item.name} />
          </div>
          <div id="popup-slider">{item.popupText}</div>
        </div>
      );
    }
  });

  return <div className="menubar">{renderItems}</div>;
};

export default Menubar;
