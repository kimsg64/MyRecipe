import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { auth } from '@utils/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

interface UserContextProps {
    currentUser: User | null | undefined;
}

const UserContext = createContext<UserContextProps>({ currentUser: undefined });

export const UserProvider = ({ children }: PropsWithChildren) => {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user: User | null | undefined) => {
            setCurrentUser(user);
            return user;
        });
    }, []);

    return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
