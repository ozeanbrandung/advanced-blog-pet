import {FC, memo, useMemo} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentsList.module.scss';
import {IComment} from '../../model/types/comments';
import {CommentItem} from '../CommentItem/CommentItem';
import {CommentSkeleton} from '../CommentSkeleton/CommentSkeleton';
import {Text} from 'shared/ui/Text/Text';

interface CommentsListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
    error?: string;
}

export const CommentsList:FC<CommentsListProps> = memo((props) => {
    const { className, comments, isLoading , error } = props;
    const {t} = useTranslation('article');

    const commentsMemoed = useMemo(
        () => comments?.map(comment =>
            <CommentItem className={styles.comment} key={comment.id} comment={comment} />
        ), [comments]);

    if (isLoading) {
        return (
            <div className={classNames('styles.CommentsList', {}, [className])}>
                <Text title={t('commentsListTitle')} />
                <CommentSkeleton className={styles.comment} />
            </div>
        );
    }

    if (error) {
        return <Text text={error} isError />;
    }

    return (
        <div className={classNames('styles.CommentsList', {}, [className])}>
            <Text title={t('commentsListTitle')} />
            {comments?.length ?
                commentsMemoed :
                <Text title={t('noComments')} />
            }
        </div>
    );
});
