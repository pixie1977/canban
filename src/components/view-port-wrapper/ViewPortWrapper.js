import React, {useEffect, useState} from 'react';

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
};

export const connectViewPortWrapper = WrappedComponent => {
    return ({...props}) => {
        const {height, width} = useWindowDimensions();
        return (
            <WrappedComponent {...props} viewPortHeght={height} vieportWidth={width}/>
        );
    };
};
