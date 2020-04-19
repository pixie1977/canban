import cuid from 'cuid';

const itemsFromBackend = [
    {
        id: cuid(),
        title: 'First task',
        description:
            'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.',
    },
    {id: cuid(), title: 'Second task', description: 'desc 2'},
    {id: cuid(), title: 'Third task', description: 'desc 3'},
    {id: cuid(), title: 'Fourth task', description: 'desc 4'},
    {id: cuid(), title: 'Fifth task', description: 'desc 5'},
];

export const columnsDescriptionDataService = {
    [cuid()]: {
        name: 'Requested',
        items: itemsFromBackend,
    },
    [cuid()]: {
        name: 'To do',
        items: [],
    },
    [cuid()]: {
        name: 'In Progress',
        items: [],
    },
    [cuid()]: {
        name: 'Done',
        items: [],
    },
};
