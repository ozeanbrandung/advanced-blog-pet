import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    isShort?: boolean;
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const { className, isShort } = props;
    //берем переводы из файла default, если ничего не указывать
    //по умолчанию - файл translation
    const {t, i18n} = useTranslation('default');
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'de' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}
        >
            {t(!isShort ? 'Language' : 'LanguageCut')}
        </Button>
    );
};
