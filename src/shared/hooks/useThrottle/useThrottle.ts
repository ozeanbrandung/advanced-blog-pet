import {useCallback, useRef} from 'react';

export const useThrottle = (callback: (...args:any[]) => void, delay: number) => {
    const isPaused = useRef(false);
    
    return useCallback((...args:any[]) => {
        if (!isPaused.current) {
            callback(...args);
            isPaused.current = true;

            const timer = setTimeout(() => {
                isPaused.current = false;
                clearTimeout(timer);
            }, delay);
        }
    }, [callback, delay]);
};