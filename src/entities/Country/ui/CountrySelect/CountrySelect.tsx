import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Country } from '../../model/consts/constsCountry';

import { ListBox, ListBoxOption } from '@/shared/ui/Popups';

interface CountrySelectProps {
    className?: string;
    onChange?: (county: Country) => void;
    value?: Country;
    readonly?: boolean;
}

const options: ListBoxOption<Country>[] = [
    { value: Country.Armenia, text: Country.Armenia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Ukraine, text: Country.Ukraine },
];

const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, onChange, value, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandle = useCallback(
        (country: Country) => {
            onChange?.(country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={className}
            disabled={readonly}
            options={options}
            onChange={onChangeHandle}
            label={t('Ваша страна')}
            value={value}
        />
    );
});

export { CountrySelect };
