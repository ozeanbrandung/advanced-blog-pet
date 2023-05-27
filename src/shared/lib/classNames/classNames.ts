//record - как объект только с ограниченным кол-вом значений
//до запятой - тип ключа, после - тип значения
type Mods = Record<string, boolean | string>

// const obj:Mods = {
//     'key': true
// }

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
):string {
    return [
        cls,
        //может прилететь undefined
        // поэтому чтобы не выскочила ошибка надо бы вот такой хак через filter сделать
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}

//classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['someClass', 'some2'])

//'remove-btn hovered selectable someClass some2'
