import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
    useCommentFormError,
    useCommentFormText,
} from '../../model/selectors/getCommentForm';
import {
    addCommentFormReducer,
    useAddCommentFormActions,
} from '../../model/slice/addCommentFormSlice';

import cls from './AddCommentForm.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ReducersList,
    useDynamicModule,
} from '@/shared/lib/hooks/useDynamicModule';
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
    const { className, onSendComment } = props;
    const { t } = useTranslation('comment');

    useDynamicModule(initialReducers);

    const { setText } = useAddCommentFormActions();
    const error = useCommentFormError();
    const text = useCommentFormText();

    const onChangeCommentText = useCallback(
        (value: string) => {
            setText(value);
        },
        [setText],
    );

    const onCommentSendHandle = useCallback(() => {
        onSendComment(text);
        onChangeCommentText('');
    }, [onChangeCommentText, onSendComment, text]);

    return (
        <div
            className={classNames(cls.AddCommentForm, {}, [className])}
            data-testid="CommentForm"
        >
            <Input
                data-testid="CommentForm.Input"
                label={t('Добавить комментрий')}
                value={text}
                onChange={onChangeCommentText}
                className={cls.input}
            />
            <Button
                data-testid="CommentForm.Button"
                onClick={onCommentSendHandle}
                className={cls.sendBtn}
            >
                {t('Отправить')}
            </Button>
        </div>
    );
});

export { AddCommentForm };
