import {FC, memo} from 'react';
//import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './CommentItem.module.scss';
import {Avatar, AvatarModes} from 'shared/ui/Avatar/Avatar';
import {IComment} from '../../model/types/comments';
import {Text} from 'shared/ui/Text/Text';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {AppRoutes} from 'shared/config/routesConfig/routesConfig';

interface CommentItemProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

export const CommentItem:FC<CommentItemProps> = memo((props) => {
    const { className, comment } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.CommentItem, {}, [className])}>
            <AppLink to={'/' + AppRoutes.PROFILE + '/' + comment.user.id} className={styles.header}>
                <Avatar className={styles.avatar} mode={AvatarModes.SMALL} src={comment.user.avatar}/>
                <Text className={styles.username} text={comment.user.username} />
            </AppLink>
            <Text className={styles.text} text={comment.text} />
        </div>
    );
});
