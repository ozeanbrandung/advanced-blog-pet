export const getQueryParams = (params: OptionalRecord<string, string>) => {
    //парсим текущий url
    const searchParams = new URLSearchParams(window.location.search);
    //теперь добавляем к той строке что есть (или к тем параметрам что есть) то что закинули в аргументы функции
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
};

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
    const queryParams = getQueryParams(params);
    window.history.pushState(null, '', queryParams);
};