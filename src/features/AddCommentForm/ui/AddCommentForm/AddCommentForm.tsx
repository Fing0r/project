import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { getCommentFormError, getCommentFormText } from '../../model/selectors/getCommentForm';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const { t } = useTranslation('comment');

    useDynamicModule(initialReducers);

    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);
    const error = useSelector(getCommentFormError);

    const onChangeCommentText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onCommentSendHandle = useCallback(() => {
        onSendComment(text);
        onChangeCommentText('');
    }, [onChangeCommentText, onSendComment, text]);

    return (
        <div className={classNames(cls.AddCommentForm, {}, [className])}>
            <Input
                label={t('Добавить комментрий')}
                value={text}
                onChange={onChangeCommentText}
                className={cls.input}
            />
            <Button
                onClick={onCommentSendHandle}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
});

export { AddCommentForm };
