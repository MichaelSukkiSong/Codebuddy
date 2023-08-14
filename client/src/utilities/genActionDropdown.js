import {
  changeLanguage,
  changeFramework,
  changeChangedLanguage,
} from '../store';

const genActionDropdown = (name) => {
  if (name === 'Language') {
    return changeLanguage;
  } else if (name === 'Framework') {
    return changeFramework;
  } else if (name === 'Changed Language') {
    return changeChangedLanguage;
  }
};

export default genActionDropdown;
