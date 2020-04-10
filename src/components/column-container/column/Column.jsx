import React from 'react';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import classNames from 'classnames';
import {TaskCard} from './task-card/TaskCard'
import {NewCardEditor} from './card-editor/CardEditor';
import './Column.css'


export const Column = ({columnId, column, isAuthorized, updateColumn, setViewSimpleCard}) => {
    return (
        <div
            data-node='column'
            className='columnCommon columnAdaptive'
        >
            <div className='baseCardFont margin16'>{column.name}</div>
            <div className='cardsPadding scrollableY'>
                {isAuthorized
                    ? <Droppable droppableId={columnId} key={columnId}>
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
                                                        <TaskCard provided={provided}
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
                    : <div>
                        {column.items.map((item) => {
                            return (
                                <TaskCard
                                    key={item.id}
                                    provided={null}
                                    snapshot={null}
                                    item={item}
                                    setViewSimpleCard={setViewSimpleCard}
                                />)
                        })}
                    </div>
                }
            </div>
            {isAuthorized && <NewCardEditor columnId={columnId} updateColumn={updateColumn}/>}
        </div>
    )
};
