import React, {useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import cuid from 'cuid';
import {Column} from './column/Column';
import './ColumnContainer.css';
import {BigText} from './big-text/BigText';
import {connectViewPortWrapper} from "../view-port-wrapper/ViewPortWrapper";

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {source, destination} = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};
const updateSimpleColumn = (columns, setColumns) => {
    return (columnId, data) => {
        setColumns(
            Object.entries(columns).map(([cId, col]) => {
                if (!col.items) col.items = [];
                if (columnId === cId) col.items.push(data);
                return col;
            }),
        );
    };
};
const ViewPortColumn = connectViewPortWrapper(Column);
const renderColumns = (columns,
                       isAuthorized,
                       setColumns,
                       setViewSimpleCard,) => {
    return Object.entries(columns).map(([columnId, column]) => {
        return (
            <ViewPortColumn
                key={cuid()}
                columnId={columnId}
                column={column}
                isAuthorized={isAuthorized}
                updateColumn={updateSimpleColumn(columns, setColumns)}
                setViewSimpleCard={setViewSimpleCard}
            />
        );
    });
};

export const ColumnContainer = ({columnsDescription, isAuthorized}) => {
    const [columns, setColumns] = useState(columnsDescription);
    const [viewSimpleCard, setViewSimpleCard] = useState(null);
    return (
        <div data-node="column-container" className="columnContainer">
            {viewSimpleCard ? (
                <BigText
                    data={viewSimpleCard}
                    handleClose={() => setViewSimpleCard(null)}
                />
            ) : isAuthorized ? (
                <DragDropContext
                    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                >
                    {renderColumns(columns, isAuthorized, setColumns, setViewSimpleCard)}
                </DragDropContext>
            ) : (
                <>
                {renderColumns(columns, isAuthorized, setColumns, setViewSimpleCard)}
                </>
            )}
        </div>
    );
};
