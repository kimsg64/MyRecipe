import { auth } from '@utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const fetcher = (url: string) => {
    onAuthStateChanged(auth, (user: any) => {
        console.log('getting userdata from ', url, ': ', user);
        return user;
    });
};

export default fetcher;
