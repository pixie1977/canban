import React from 'react';
import './BigText.css'

export const BigText = ({data, handleClose}) => {
    return (
        <div data-node='big-text' className='mainPanel mainPanelAdaptive' onClick={handleClose}>
            <div className='textContainer'>{data.title}</div>
            <div className='textContainer'>{data.description}</div>
        </div>
    )
};