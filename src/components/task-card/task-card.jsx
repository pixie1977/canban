import React from "react";
import classNames from 'classnames';
import styles from './task-card.css'

export const TaskCard = ({provided, snapshot, item}) => {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classNames({
                [styles.cardMainStyle]: true,
                [styles.cardPlaced]: !snapshot.isDragging,
                [styles.cardIsDragging]: snapshot.isDragging
            })}
            style={{
                ...provided.draggableProps.style
            }}
        >
            {item.content}
        </div>
    );
};