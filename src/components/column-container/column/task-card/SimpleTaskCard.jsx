import React from 'react';
import classNames from 'classnames';
import './TaskCard.css';

export const SimpleTaskCard = ({
                                   provided,
                                   snapshot,
                                   item,
                                   setViewSimpleCard,
                               }) => {
    const ref = provided ? provided.innerRef : null;
    const draggableProps = provided ? provided.draggableProps : {};
    const dragHandleProps = provided ? provided.dragHandleProps : {};
    const isDragging = snapshot ? snapshot.isDragging : false;
    const style =
        provided && provided.draggableProps ? provided.draggableProps.style : {};
    return (
        <div
            ref={ref}
            {...draggableProps}
            {...dragHandleProps}
            className={classNames({
                cardFont: true,
                cardMainStyle: true,
                cardPlaced: !isDragging,
                cardIsDragging: isDragging,
            })}
            style={{...style}}
            onClick={() => {
                setViewSimpleCard(item);
            }}
        >
            {item.title}
        </div>
    );
};
