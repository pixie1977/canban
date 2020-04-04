import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import classNames from 'classnames';
import './column.css'
import {TaskCard} from './../task-card/task-card'

export const Column = ({columnId, column}) => {
    return (
        <div
            data-node='column'
            className='column'
            key={columnId}
        >
            <h2>{column.name}</h2>
            <div className='cardsPadding'>
                <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={classNames({
                                    'columnDroppableZone': true,
                                    'bgLightBlue': !snapshot.isDraggingOver,
                                    'bgLightGray': snapshot.isDraggingOver
                                })}
                            >
                                {column.items.map((item, index) => {
                                    return (
                                        <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                        >
                                            {(provided, snapshot) => {
                                                return (
                                                    <TaskCard provided={provided} snapshot={snapshot} item={item}/>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    )
}
