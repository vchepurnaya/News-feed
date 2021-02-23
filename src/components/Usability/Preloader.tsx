import React from 'react';

import { PreloaderProps } from '../../assets/types';

import './Preloader.css'

const Preloader: React.FC<PreloaderProps> = ({isLoading}) => {
    return (
        <div
            className="preloader"
            style={isLoading ? {display: 'flex'} : {display: 'none'}}
        >
            <div className="preloader__item"/>
        </div>
    );
};

export default Preloader;
