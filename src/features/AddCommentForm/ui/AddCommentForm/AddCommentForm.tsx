import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useCommentFormError, useCommentFormText } from '../../model/selectors/getCommentForm';
import {
    addCommentFormReducer,
    useAddCommentFormActions,
} from '../../model/slice/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

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

    const { setText } = useAddCommentFormActions();
    const text = useCommentFormText();
    const error = useCommentFormError();

    const onChangeCommentText = useCallback((value: string) => {
        setText(value);
    }, [setText]);

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
                className={cls.sendBtn}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
});

export { AddCommentForm };
