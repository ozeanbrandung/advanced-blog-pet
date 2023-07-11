import ListIcon from 'shared/assets/icons/list-icon.svg';
import GridIcon from 'shared/assets/icons/grid-icon.svg';
import {ArticlesViewMode} from 'entities/Article';

export const buttonsConfig = [
    {
        icon: ListIcon,
        viewMode: ArticlesViewMode.LIST
    },
    {
        icon: GridIcon,
        viewMode: ArticlesViewMode.GRID
    }
]