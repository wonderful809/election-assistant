import { saveSession, isRateLimited } from '../../services/firestoreService';

// Mock Firestore
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn().mockResolvedValue({ id: 'mock-id' }),
  serverTimestamp: jest.fn(),
  query: jest.fn(),
  where: jest.fn(),
  getDocs: jest.fn().mockResolvedValue({ size: 10 }),
}));

describe('Firestore Integration', () => {
  it('saves session successfully', async () => {
    const id = await saveSession('user123', { message: 'test' });
    expect(id).toBe('mock-id');
  });

  it('checks rate limiting', async () => {
    const limited = await isRateLimited('user123');
    expect(limited).toBe(false);
  });
});
