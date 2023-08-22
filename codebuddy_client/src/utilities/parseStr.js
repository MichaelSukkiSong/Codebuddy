export const parseContentStr = (str) => {
  if (str.length > 60) {
    return str.slice(0, 60) + ' ...';
  } else {
    return str;
  }
};
export const parseShortStr = (str) => {
  if (str.length > 10) {
    return str.slice(0, 10) + ' ...';
  } else {
    return str;
  }
};
