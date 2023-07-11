import {useCallback, useState} from 'react';

interface mouseMoveFunctions {
    onMouseEnter(): void;
    onMouseLeave(): void;
}

type useHoverReturn = [boolean, mouseMoveFunctions]

export const useHover = ():useHoverReturn => {
    const [isHovered, setIsHovered] = useState(false);
    
    const onMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);
    
    return [isHovered, {onMouseEnter, onMouseLeave}];
};