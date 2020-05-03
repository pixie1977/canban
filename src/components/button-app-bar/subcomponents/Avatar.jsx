import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import {Trigger} from './Trigger';
import {CustomTooltip} from './CustomTooltip';

export const Avatar = ({setAuthorizedHandler}) => {

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
