import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounce, setdebounce] = useState(value);

    useEffect(() => {
        const a = setTimeout(() => {
            setdebounce(value);
        }, delay);

        return () => {
            clearTimeout(a);
        };
        // eslint-disable-next-line
    }, [value]);

    return debounce;
}

export default useDebounce;
