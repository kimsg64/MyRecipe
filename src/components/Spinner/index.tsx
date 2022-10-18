import { useEffect, useState } from 'react';
import { BackDrop } from './style';

const Spinner = () => {
    const [msg, setMsg] = useState('L O A D I N G');

    useEffect(() => {
        const interval = setInterval(() => {
            switch (msg) {
                case 'L O A D I N G':
                    setMsg('L O A D I N G .');
                    break;
                case 'L O A D I N G .':
                    setMsg('L O A D I N G . .');
                    break;
                case 'L O A D I N G . .':
                    setMsg('L O A D I N G . . .');
                    break;
                case 'L O A D I N G . . .':
                    setMsg('L O A D I N G');
                    break;
            }
        }, 500);

        return () => clearInterval(interval);
    }, [msg]);

    return (
        <BackDrop>
            <div>{msg}</div>
        </BackDrop>
    );
};

export default Spinner;
