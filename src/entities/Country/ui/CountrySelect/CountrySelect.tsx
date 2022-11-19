import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    onChange?: (county: Country) => void;
    value?: Country;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, text: Country.Armenia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Ukraine, text: Country.Ukraine },
];

const CountrySelect = memo((props: CountrySelectProps) => {
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
            label={t('Ваша страна')}
            value={value}
        />
    );
});

export { CountrySelect };
