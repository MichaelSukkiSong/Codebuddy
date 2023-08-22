import {
  changeLanguage,
  changeFramework,
  changeChangedLanguage,
  changeSearchBy,
} from '../store';

const genActionDropdown = (name) => {
  if (name === 'Language') {
    return changeLanguage;
  } else if (name === 'Framework') {
    return changeFramework;
  } else if (name === 'Changed Language') {
    return changeChangedLanguage;
  } else if (name === 'Search by') {
    return changeSearchBy;
  }
};

export default genActionDropdown;
