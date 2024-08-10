import { useContext, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUserList, User } from '../store/userSlice';
import { db } from '../Helpers/Firebase';
import { getAuth } from 'firebase/auth';

const useFirestoreUsers = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    const currentUser = auth.currentUser;

    console.log("currentUser",currentUser);
    useEffect(() => {
        const usersCollection = collection(db, 'users');

        const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
            const usersData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })).filter(user => user.id !== currentUser?.uid); // Kendi kullanıcı ID'nizi filtreliyoruz;

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
