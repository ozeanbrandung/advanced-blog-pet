import {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AddCommentForm.module.scss';
import {Button, ButtonThemes} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {useAsyncReducer, UseAsyncReducerEntry} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {addCommentActions, addCommentReducer} from '../../model/slice/addCommentSlice';
import {useSelector} from 'react-redux';
import {getAddCommentError, getAddCommentLoading, getTextValue} from '../../model/selectors/addCommentSelectors';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {Text} from 'shared/ui/Text/Text';

export interface AddCommentFormProps {
    className?: string;
    handleAddNewComment(value: string): void;
}

const options:UseAsyncReducerEntry[] = [{
    reducer: addCommentReducer,
    reducerKey: 'addComment'
}];

const AddCommentForm:FC<AddCommentFormProps> = memo((props) => {
    const { className, handleAddNewComment } = props;
    const {t} = useTranslation('article');
    useAsyncReducer({options});
    const textValue = useSelector(getTextValue);
    const error = useSelector(getAddCommentError);
    const isLoading = useSelector(getAddCommentLoading);
    const dispatch = useAppDispatch();

    const handleTextValueChange = useCallback((value: string) => {
        dispatch(addCommentActions.setTextValue(value));
    }, [dispatch]);

    const handleClickAddComment = useCallback(() => {
        handleAddNewComment(textValue);
        //мне эта идея не нравится я боюсь что ошибки возникающие у thunk могут стираться очиткой формы глобальной
        //dispatch(addCommentActions.clearForm());
        dispatch(addCommentActions.setTextValue(''));
    }, [textValue, handleAddNewComment]);

    if (error) {
        return <Text text={error} isError />;
    }

    return (
        <div className={classNames(styles.AddCommentForm, {}, [className])}>
            <Text title={t('addNewCommentTitle')} className={styles.title}/>

            <div className={styles.formContainer}>
                <Input
                    onChange={handleTextValueChange}
                    value={textValue}
                />
                <Button theme={ButtonThemes.OUTLINE} onClick={handleClickAddComment} disabled={isLoading}>
                    {t('addNewComment')}
                </Button>
            </div>
        </div>
    );
});

export default AddCommentForm;