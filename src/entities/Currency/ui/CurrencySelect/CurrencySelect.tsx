import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../../model/consts/constsCurrency';

import { ListBox, ListBoxOption } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    onChange?: (currency: Currency) => void;
    value?: Currency;
    readonly?: boolean;
}

const options: ListBoxOption<Currency>[] = [
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.USD, text: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, onChange, value, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandle = useCallback(
        (currency: Currency) => {
            onChange?.(currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={className}
            disabled={readonly}
            options={options}
            onChange={onChangeHandle}
            label={t('Ваша валюта')}
            value={value}
        />
    );
});

export { CurrencySelect };
