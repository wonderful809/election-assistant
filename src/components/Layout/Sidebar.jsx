import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Sidebar component for navigation
 * @returns {JSX.Element} The Sidebar component
 */
const Sidebar = () => {
  const { t } = useLanguage();

  return (
    <aside className="app-sidebar" style={{ width: '250px', background: 'var(--surface-color)', padding: '16px', borderRight: '1px solid #ccc' }} role="complementary">
      <nav aria-label="Main Navigation">
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="#timeline">{t('timeline_title')}</a></li>
          <li><a href="#voting">{t('voting_guide_title')}</a></li>
          <li><a href="#faq">{t('faq_title')}</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default React.memo(Sidebar);
