import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

interface indexProps {
    className?: string;
}

//компонент для тестирования ErrorBoundary
export const ErroredButton:FC<indexProps> = () => {
    const [isError, setIsError] = useState(false);

    function throwError () {
        setIsError(true);
    }

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={throwError}>
            throw error
        </Button>
    );
};
