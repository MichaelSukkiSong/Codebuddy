// Regular expression pattern to match the URLs
const regex = /^\/playground(?:\/([^\/]+))?(?:\/categories(?:\/[^\/]+)?)?$/;

const extractStringFromURL = (url) => {
  const match = url.match(regex);
  if (match) {
    // If 'categories' is in the URL, return 'custom'
    if (match[1] === undefined && url.includes('categories')) {
      return 'custom';
    }
    // Otherwise, return the captured group or 'default' if not available
    return match[1] || 'default';
  }
  // Return null if the URL doesn't match the pattern
  return null;
};

export { extractStringFromURL };
