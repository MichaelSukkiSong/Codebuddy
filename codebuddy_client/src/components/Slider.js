import './Slider.scss';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { changeTemperature } from '../store';

const SliderWrapper = ({ name }) => {
  const dispatch = useDispatch();

  const value = useSelector((state) => {
    return state.messages.temperature;
  });

  const handleSliderChange = (event) => {
    dispatch(changeTemperature(event));
  };

  const handleInputChange = (event) => {
    dispatch(changeTemperature(parseFloat(event.target.value)));
  };

  const handleSliderFocus = (event) => {
    // console.log(event);

    // Remove outline and box shadow on focus
    event.target.style.outline = 'none';
    event.target.style.boxShadow = 'none';
  };

  const handleSliderBlur = (event) => {
    // Restore outline and box shadow on blur
    event.target.style.outline = '';
    event.target.style.boxShadow = '';
  };

  return (
    <div className="slider">
      <div className="slider__header">
        <span className="slider__header-name">{name}</span>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="slider__header-input"
        />
      </div>
      <div className="slider__main">
        <Slider
          onChange={handleSliderChange}
          max={2}
          value={value}
          step={0.01}
          defaultValue={1}
          trackStyle={{ backgroundColor: '#adb5bd' }}
          handleStyle={{
            border: '2px solid #adb5bd',
          }}
          onFocus={handleSliderFocus}
          onBlur={handleSliderBlur}
        />
      </div>
    </div>
  );
};

export default SliderWrapper;
