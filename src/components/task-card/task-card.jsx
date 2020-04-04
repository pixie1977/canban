import React from "react";
import classNames from 'classnames';
import './task-card.css'

export const TaskCard = ({provided, snapshot, item}) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classNames({
                'cardMainStyle': true,
                'cardPlaced': !snapshot.isDragging,
                'cardIsDragging': snapshot.isDragging
            })}
            style={{
                ...provided.draggableProps.style
            }}
        >
            {item.content}
        </div>
    );
};