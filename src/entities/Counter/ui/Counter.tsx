import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const { t } = useTranslation();
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{value}</h1>
            <Button
                data-testid="btn-increment"
                onClick={increment}
            >
                {t('increment')}
            </Button>
            <Button
                data-testid="btn-decrement"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    );
};

export { Counter };
