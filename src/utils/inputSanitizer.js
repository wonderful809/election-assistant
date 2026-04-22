/**
 * Sanitizes input text to prevent XSS.
 * @param {string} input - Raw input string
 * @returns {string} Sanitized string
 */
export const sanitizeInput = (input) => {
  if (!input) return '';
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
