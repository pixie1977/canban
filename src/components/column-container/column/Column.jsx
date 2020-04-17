import React from 'react'
import {SimpleTaskCard} from './task-card/SimpleTaskCard'
import {NewCardEditor} from './card-editor/CardEditor'
import './Column.css'
import {DragAnDropTaskCard} from "./task-card/DragAndDropTaskCard";


export const Column = ({columnId, column, isAuthorized, updateColumn, setViewSimpleCard}) => {
    return (
        <div
            data-node='column'
            className='columnCommon columnAdaptive'
        >
            <div className='baseCardFont margin16'>{column.name}</div>
            <div className='cardsPadding scrollableY'>
                {isAuthorized
                    ? <DragAnDropTaskCard
                        column={column}
                        columnId={columnId}
                        setViewSimpleCard={setViewSimpleCard}
                    />
                    : <div>
                        {column.items.map((item) => {
                            return (
                                <SimpleTaskCard
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
