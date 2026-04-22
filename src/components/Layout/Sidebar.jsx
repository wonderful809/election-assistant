import React from 'react';

/**
 * Sidebar component for navigation
 * @returns {JSX.Element} The Sidebar component
 */
const Sidebar = () => {
  return (
    <aside className="app-sidebar" style={{ width: '250px', background: 'var(--surface-color)', padding: '16px', borderRight: '1px solid #ccc' }} role="complementary">
      <nav aria-label="Main Navigation">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="#timeline">Election Timeline</a></li>
          <li><a href="#voting">Voting Guide</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default React.memo(Sidebar);
