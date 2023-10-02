// Regular expression pattern to match the URLs
const regex = /^\/playground(?:\/([^\/]+))?(?:\/categories\/([^\/]+))?$/;

// Function to extract the desired object from the URL
function extractObjectFromURL(url) {
  const match = url.match(regex);
  if (match) {
    // If 'categories' is in the URL
    if (match[1] === undefined && match[2] !== undefined) {
      const customObject = {
        name: 'custom',
        categoryId: match[2],
      };
      return customObject;
    }
    // If only '/playground' or '/playground/xxx' is in the URL
    const extractedString = match[1] || 'default';
    return { name: extractedString };
  }
  // Return null if the URL doesn't match the pattern
  return null;
}

export { extractObjectFromURL };
