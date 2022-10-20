import { ChangeEvent, useCallback, useState } from 'react';

// const useInput = (initialData: String) => {
const useInput = (initialData: any) => {
    const [value, setValue] = useState(initialData);
    // const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const onChangeHandler = useCallback((e: any) => {
        setValue(e.target.value);
    }, []);
    // console.log(value);
    return [value, onChangeHandler, setValue];
};

export default useInput;
