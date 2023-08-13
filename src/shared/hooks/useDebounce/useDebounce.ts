import {useCallback, useRef} from 'react';

export const useDebounce = (callback: (...args:any[]) => void, delay: number) => {
    const timer = useRef<NodeJS.Timer>();

    return useCallback((...args:any[]) => {
        //если за время delay будет снова вызываться функция то таймер будет сбрасываться до тех пор пока вызовы не прекратятся
        // и уж только тогда выполнится последний вызов
        // в throttle просто каждый раз через delay время происходит вызов
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
};