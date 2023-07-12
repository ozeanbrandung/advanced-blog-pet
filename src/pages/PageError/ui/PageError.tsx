import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';
import {Page} from 'shared/ui/Page/Page';

interface PageErrorProps {
    className?: string;
}

export const PageError:FC<PageErrorProps> = (/*props*/) => {
    //const { className } = props;
    const {t} = useTranslation('default');

    const reloadPage = () => {
        location.reload();
    };

    return (
        <Page>
            {t('errorPage')}
            <Button onClick={reloadPage}>
                {t('reloadPageButton')}
            </Button>
        </Page>
    );
};
