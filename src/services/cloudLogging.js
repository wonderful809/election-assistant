/**
 * Log message to Cloud Logging proxy (placeholder)
 * @param {string} level - Log level (info, warn, error)
 * @param {string} message - Log message
 * @param {object} meta - Additional metadata
 */
export const logToCloud = (level, message, meta = {}) => {
  // In a real app, this would send to a Cloud Function proxy to log to Google Cloud Logging
  const logEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...meta
  };
  console[level]("[CloudLog]", logEntry);
};
