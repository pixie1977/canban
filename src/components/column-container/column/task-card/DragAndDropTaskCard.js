import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import classNames from 'classnames'
import {SimpleTaskCard} from './SimpleTaskCard'

export const DragAnDropTaskCard = ({column, columnId, setViewSimpleCard}) => {
    return <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
            return (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={classNames({
                        'columnDroppableZone': true,
                        'bgParked': !snapshot.isDraggingOver,
                        'bgDraggingOver': snapshot.isDraggingOver
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
                                        <SimpleTaskCard provided={provided}
                                                        snapshot={snapshot}
                                                        item={item}
                                                        setViewSimpleCard={setViewSimpleCard}
                                        />
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
};