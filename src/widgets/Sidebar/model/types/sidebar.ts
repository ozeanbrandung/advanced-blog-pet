import {SVGProps, VoidFunctionComponent} from 'react';

export interface SidebarItemType {
    path: string;
    textTranslationKey: string;
    Icon: VoidFunctionComponent<SVGProps<SVGSVGElement>>;
    isAuthOnly?: boolean;
}