import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
    return (<div style={{backgroundColor: 'white'}}>
        <img src = {preloader} alt='preloader'></img>
    </div>);
};

export default Preloader;