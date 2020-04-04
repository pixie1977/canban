import cuid from "cuid";

const itemsFromBackend = [
    { id: cuid(), content: "First task" },
    { id: cuid(), content: "Second task" },
    { id: cuid(), content: "Third task" },
    { id: cuid(), content: "Fourth task" },
    { id: cuid(), content: "Fifth task" }
];

export const columnsDescriptionDataService = {
    [cuid()]: {
        name: "Requested",
        items: itemsFromBackend
    },
    [cuid()]: {
        name: "To do",
        items: []
    },
    [cuid()]: {
        name: "In Progress",
        items: []
    },
    [cuid()]: {
        name: "Done",
        items: []
    }
};

