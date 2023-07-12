import {MutableRefObject, useEffect} from 'react';

//TODO: как бы не объединяя аргументы в объект заиспользовать этот интерфейс
// interface IUseIntersection {
//     callback(): void;
//     rootRef: MutableRefObject<HTMLElement>,
//     triggerRef:  MutableRefObject<HTMLElement>,
// }

//TODO: intersection observer работает только с таким root у которого есть скролл!
export const useIntersection = (
    rootRef:MutableRefObject<HTMLDivElement | null>,
    triggerRef:MutableRefObject<HTMLDivElement | null>,
    callback?:() => void,
    //TODO: все-таки только через объект
    //{callback, rootRef, triggerRef}: IUseIntersection
) => {
    useEffect(() => {
        let observer: IntersectionObserver | null;
        const root = rootRef.current;
        const trigger = triggerRef.current;

        if (root && trigger && callback) {
            //РЕФЫ МОГУТ МЕНЯТЬСЯ В РАЗНЫЕ ЭТАПЫ РЕ НДЕРОВ
            //НАПРИМЕР ПРИ АНМАУНТЕ МОЖЕТ ПРОИСХОДИТЬ ОЧИСТКА РЕФОВ БЫСТРЕЕ
            //ЧЕМ ТУТ ОТПИСКА ПРОИСХОДИТ ОТ ОБЗХЕРВЕРА - ТОГДА ПРИЛОЖЕНИЕ УПАДЕТ С ОШИБКОЙ
            //ТАК ЧТО НУЖНО СОХРАНИТЬ РЕФЫ В ПЕРЕМЕННЫЕ ВНУТРИ ХУКА, ЧТОБЫ ОНИ ВСЕ ВРЕМЯ БЫЛИ ДОСТУПНЫ
            //ПОКА ИДЕТ РАБОТА С ХУКОМ

            const options = {
                root: root,
                rootMargin: '1px',
                //A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
                threshold: 1.0,
            };

            const observeFunction:IntersectionObserverCallback = ([entry]) => {
                //entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    //console.log('has intersected');
                    callback();
                }
                //});
            };

            // eslint-disable-next-line prefer-const
            observer = new IntersectionObserver(observeFunction, options);

            observer.observe(trigger);

            //debugger
        }


        return () => {
            //ESLint: The ref value 'triggerRef.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'triggerRef.current' to a variable inside the effect, and use that variable in the cleanup function.(react-hooks/exhaustive-deps)
            //observer?.unobserve(triggerRef.current);

            if (observer && trigger && callback) {
                //observer?.disconnect();
                observer.unobserve(trigger);
            }
        };
    }, [callback, rootRef, triggerRef]);

};
