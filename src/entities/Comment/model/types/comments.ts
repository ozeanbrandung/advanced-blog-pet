import {User} from 'entities/User';

export interface IComment {
    id: string;
    text: string;
    articleId: string;
    user: User;
}