import {useState, useEffect} from 'react';
import {Mainvisual} from './mainvisual';
import{VideoSlide} from './videoSlide';

function Main(){
    return(
        <div className="Main">
            <Mainvisual></Mainvisual>
            <VideoSlide></VideoSlide>
        </div>
    )
}





export{Main}