import { memo, useCallback } from 'react';

import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import cls from './Code.module.scss';

import CopyIcon from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CopyProps {
    className?: string;
    code: string;
}

const Code = memo((props: CopyProps) => {
    const { className, code } = props;

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <code>{code}</code>
            <Button
                className={cls.btnCopy}
                theme={ButtonTheme.CLEAR}
                onClick={handleCopy}
            >
                <Icon Svg={CopyIcon} />
            </Button>
        </pre>
    );
});

export { Code };
