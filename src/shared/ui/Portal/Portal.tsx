import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    root?: HTMLElement;
}

export const Portal:FC<PortalProps> = ({
    children,
    root = document.body
}) => {
    return createPortal(children, root);
};
