import {FC, memo, useCallback} from 'react';
//import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SwitchArticlesViewMode.module.scss';
import {buttonsConfig} from '../../model/buttonsConfig';
import {ArticlesViewMode} from 'entities/Article';
import {Button} from 'shared/ui/Button/Button';


interface SwitchArticlesViewModeProps {
    className?: string;
    onChangeMode(mode: ArticlesViewMode): void;
    currentViewMode: ArticlesViewMode;
}

export const SwitchArticlesViewMode:FC<SwitchArticlesViewModeProps> = memo((props) => {
    const { className, onChangeMode, currentViewMode } = props;
    //const {t} = useTranslation('default');

    const handleClickModeButton = useCallback((viewMode: ArticlesViewMode) => {
        return () => {
            onChangeMode(viewMode);
        };
    }, [onChangeMode]);

    return (
        <div className={classNames(styles.SwitchArticlesViewMode, {}, [className])}>
            {buttonsConfig.map(item => {
                return (
                    <Button
                        onClick={handleClickModeButton(item.viewMode)}
                        key={item.viewMode}
                        className={classNames(
                            styles.iconWrapper,
                            {[styles.isActive]: currentViewMode === item.viewMode},
                            []
                        )}
                    >
                        <item.icon/>
                    </Button>
                );
            })}
        </div>
    );
});
