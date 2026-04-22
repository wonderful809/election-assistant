import { db } from './firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

/**
 * Save user session to Firestore
 * @param {string} userId - The user ID
 * @param {object} sessionData - The session data to save
 * @returns {Promise<string>} The new document ID
 */
export const saveSession = async (userId, sessionData) => {
  try {
    const docRef = await addDoc(collection(db, `users/${userId}/sessions`), {
      ...sessionData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving session: ", error);
    throw error;
  }
};

/**
 * Check if the user has exceeded rate limits
 * @param {string} userId - The user ID
 * @returns {Promise<boolean>} True if rate limited, false otherwise
 */
export const isRateLimited = async (userId) => {
  const oneHourAgo = new Date(Date.now() - 3600000);
  const q = query(
    collection(db, `users/${userId}/sessions`),
    where("createdAt", ">", oneHourAgo)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.size >= 20;
};
