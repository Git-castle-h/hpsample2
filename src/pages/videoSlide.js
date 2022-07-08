import {useState, useEffect} from 'react';

function VideoSlide(){
    useEffect(function(){
        let slideStart = 0;
        let slideNum = 5;
        let dataId ='jobfind';
        let slideArea = document.querySelector('.slideArea');
        let imgSrc = process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail';

        for(let i = slideStart; i<i+slideNum; i++ ){
            
        }


    },[])
    return(
        <section className="VideoSlide">
            <div className="maintab">
                <h1 className='title'>
                    취업 교육 동영상
                </h1>
                <div className="select">
                    <button className="onepoint on"></button>
                    <button className="chippo"></button>
                </div>
            </div>
            <div className="subtab">
                <button className='subBtn on' data-id="prepare">취업준비</button>
                <button className='subBtn' data-id="resume">서류전형</button>
                <button className='subBtn' data-id="test">필기시험</button>
                <button className='subBtn' data-id="interview">면접전형</button>
            </div>
            <div className="slideWrap">
                    <div className="slideArea">
                        <a className="slide" href=""><img src="" alt="" /></a>
                    </div>
            </div>
        </section>
    )
}

export{VideoSlide}