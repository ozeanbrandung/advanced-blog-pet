import axios from 'axios';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        //так как в хедере авторизация мы должны передать токен - забираем его из стораджа
        //потом при доступе к закрытым эндпоинтам будет проверяться этот хэдер
        'Authorization': localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) || '',
    }
});
