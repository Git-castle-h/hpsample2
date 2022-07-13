import {useState, useEffect} from 'react';
import {Mainvisual} from './mainvisual';
import{VideoSlide} from './videoSlide';
import{CoachSlide} from './coachSlide';
import{ServiceIntroduce} from './serviceIntroduce.js';
import{Footer} from './footer.js';

function Main(){
    return(
        <div className="Main">
            <Mainvisual></Mainvisual>
            <VideoSlide></VideoSlide>
            <CoachSlide></CoachSlide>
            <ServiceIntroduce></ServiceIntroduce>
            <Footer></Footer>
        </div>
    )
}





export{Main}