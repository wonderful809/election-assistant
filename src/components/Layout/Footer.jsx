import React from 'react';

/**
 * Footer component for the application
 * @returns {JSX.Element} The Footer component
 */
const Footer = () => {
  return (
    <footer className="app-footer" style={{ background: 'var(--primary-color)', color: 'white', padding: '16px', textAlign: 'center' }} role="contentinfo">
      <p>&copy; {new Date().getFullYear()} Election Guide Assistant. All rights reserved.</p>
    </footer>
  );
};

export default React.memo(Footer);
