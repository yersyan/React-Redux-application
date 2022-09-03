import React from 'react';
import {BiLoaderAlt} from "react-icons/bi";
import './ui.css'

const Preloader = () => {

    return (
        <div className="preloader">
            <BiLoaderAlt/>
        </div>
    );
};

export default Preloader;