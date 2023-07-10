export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    //сам пользователь, если undefined это поле то юзер не авторизован
    //в противном случае авторизован
    authData?: User;
    _initilized: boolean;
}

// export class userSchema {
// }
