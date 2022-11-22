import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    onChange?: (currency: Currency) => void;
    value?: Currency;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.USD, text: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        value,
        readonly,
    } = props;

    const { t } = useTranslation();

    return (
        <Select
            disabled={readonly}
            options={options}
            onChange={onChange}
            label={t('Ваша валюта')}
            value={value}
        />
    );
});

export { CurrencySelect };
