import admin from 'firebase-admin/app';
import { firebaseConfig } from './firebaseApp';

if (!admin.apps.length) {
  try {
    admin.initializeApp();
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}
export default admin.firestore();