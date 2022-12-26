import { useEffect, useState } from 'react';

import { Button } from '../../Button/Button';

const ButtonError = () => {
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (showError) {
            throw new Error();
        }
    }, [showError]);

    const handleError = () => {
        setShowError(true);
    };

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={handleError}>Вызвать ошибку</Button>
    );
};

export { ButtonError };
