import React, { Suspense, lazy } from 'react';
import Header from './components/Layout/Header.jsx';
import Sidebar from './components/Layout/Sidebar.jsx';
import Footer from './components/Layout/Footer.jsx';
import { useLanguage } from './context/LanguageContext';

const ChatWindow = lazy(() => import('./components/Chat/ChatWindow.jsx'));
const ElectionTimeline = lazy(() => import('./components/Timeline/ElectionTimeline.jsx'));
const VotingWizard = lazy(() => import('./components/Voting/VotingWizard.jsx'));
const FAQCard = lazy(() => import('./components/FAQ/FAQCard.jsx'));

function App() {
  const { t } = useLanguage();

  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main id="main-content" className="content-area" role="main">
          <Suspense fallback={<div aria-live="polite">{t('loading')}</div>}>
            <section className="section-grid">
              <div className="left-column">
                <ElectionTimeline />
                <VotingWizard />
              </div>
              <div className="right-column">
                <ChatWindow />
              </div>
            </section>
            <section className="faq-section">
              <h2>{t('faq_title')}</h2>
              <FAQCard />
            </section>
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
