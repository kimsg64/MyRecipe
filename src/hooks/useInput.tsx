import { useCallback, useState } from 'react';

const useInput = (initialData: any) => {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);
    // console.log(value);
    return [value, handler, setValue];
};

export default useInput;
