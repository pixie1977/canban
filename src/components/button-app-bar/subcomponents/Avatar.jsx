import React, {useState} from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import {Trigger} from './Trigger';
import {CustomTooltip} from './CustomTooltip';

export const Avatar = ({setAuthorizedHandler}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    return (
        <TooltipTrigger
            placement='bottom'
            trigger='click'
            tooltip={CustomTooltip(setAuthorizedHandler)}
        >
            {Trigger}
        </TooltipTrigger>
    );
};
