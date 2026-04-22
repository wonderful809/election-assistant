/**
 * Formats a date string into a readable format.
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date (e.g., 'October 15, 2024')
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, options);
};
