import { useContext, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../Helpers/Firebase';
import { getAuth } from 'firebase/auth';
import { setUserList, User } from '../Store/userSlice';
 
const useFirestoreUsers = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        const usersCollection = collection(db, 'users');

        const unsubscribe = onSnapshot(usersCollection, (snapshot:any) => {
            const usersData = snapshot.docs.map((doc:any) => ({
                id: doc.id,
                ...doc.data()
            })).filter((user:any) => user.id !== currentUser?.uid); // Kendi kullanıcı ID'nizi filtreliyoruz;

            const users: User[] = usersData.map((user: any) => {
                return { 
                    id: user.id, 
                    name: user.displayName, 
                    email: user.email 
                }
            });
            dispatch(setUserList(users));
        });

        return () => unsubscribe();
    }, [dispatch]);

};

export default useFirestoreUsers;
