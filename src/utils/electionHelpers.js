/**
 * Calculates days remaining until the given election date.
 * @param {string} electionDate - ISO date string
 * @returns {number} Days remaining
 */
export const getDaysUntilElection = (electionDate) => {
  const targetDate = new Date(electionDate);
  const today = new Date();
  const diffTime = targetDate - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
