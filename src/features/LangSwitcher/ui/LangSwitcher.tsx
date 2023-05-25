import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    //берем переводы из файла default, если ничего не указывать
    //по умолчанию - файл translation
    const {t, i18n} = useTranslation('default');
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'de' : 'ru');
    }

    return (
        <Button
            className={classNames(styles.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};
