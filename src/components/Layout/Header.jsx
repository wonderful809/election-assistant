import React from 'react';
import useAuth from '../../hooks/useAuth';
import { signInWithGoogle, signOut } from '../../services/authService';

/**
 * Header component for the application
 * @returns {JSX.Element} The Header component
 */
const Header = () => {
  const { user, loading } = useAuth();

  return (
    <header className="app-header" role="banner">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4-8 4-8-4 8-4z"/><path d="M4 10v6l8 4 8-4v-6"/></svg>
        <h1>Election Guide</h1>
      </div>
      
      {!loading && (
        <div className="auth-section" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {user ? (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={user.photoURL || 'https://via.placeholder.com/32'} alt="User avatar" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)' }} />
                <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{user.displayName?.split(' ')[0]}</span>
              </div>
              <button onClick={signOut} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.4)', color: 'white', backdropFilter: 'blur(4px)' }}>Sign Out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle} style={{ padding: '8px 16px', background: 'white', color: 'var(--primary-color)' }}>Sign In to Chat</button>
          )}
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
