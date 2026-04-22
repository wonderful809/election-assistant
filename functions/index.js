const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Cloud function for proxying Claude API requests
exports.chat = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  // 1. Verify token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Unauthorized');
  }

  const idToken = authHeader.split('Bearer ')[1];
  let decodedToken;
  try {
    decodedToken = await admin.auth().verifyIdToken(idToken);
  } catch (error) {
    return res.status(401).send('Unauthorized');
  }

  const userId = decodedToken.uid;

  // 2. Rate Limiting Check
  const oneHourAgo = admin.firestore.Timestamp.fromDate(new Date(Date.now() - 3600000));
  const sessionsRef = admin.firestore().collection(`users/${userId}/sessions`);
  const snapshot = await sessionsRef.where('createdAt', '>', oneHourAgo).get();
  
  if (snapshot.size >= 20) {
    return res.status(429).send({ error: 'Rate limit exceeded' });
  }

  // 3. Call Claude API (Simulated)
  // In a real scenario, retrieve key from Secret Manager
  const userMessage = req.body.message;
  
  try {
    // Save session to Firestore
    await sessionsRef.add({
      message: userMessage,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Dummy response
    const reply = `Simulated Claude response to: "${userMessage}"`;

    // 4. Return response
    return res.status(200).send({ reply });
  } catch (error) {
    console.error("Error processing chat: ", error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
});
