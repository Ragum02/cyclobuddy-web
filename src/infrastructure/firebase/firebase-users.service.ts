import { User } from '@/src/entities/models/user';
import { db } from './config';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export class FirebaseUsersService {
  async findUserByUsername(username: string): Promise<User | undefined> {
    const docRef = doc(db, 'users', username);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? (docSnap.data() as User) : undefined;
  }

  async saveUser(user: User): Promise<User> {
    const docRef = doc(db, 'users', user.id);
    await setDoc(docRef, user);
    return user;
  }
}
