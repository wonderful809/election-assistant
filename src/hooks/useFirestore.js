import { useState } from 'react';
import { saveSession, isRateLimited } from '../services/firestoreService';

/**
 * Hook to interact with Firestore
 * @returns {object} { saveUserSession, checkRateLimit, loading, error }
 */
const useFirestore = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const saveUserSession = async (userId, data) => {
    setLoading(true);
    try {
      const id = await saveSession(userId, data);
      setLoading(false);
      return id;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  const checkRateLimit = async (userId) => {
    try {
      return await isRateLimited(userId);
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  return { saveUserSession, checkRateLimit, loading, error };
};

export default useFirestore;
