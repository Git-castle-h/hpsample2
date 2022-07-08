import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

function VideoSlide(){
    useEffect(function(){



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
                <div className="slideArea pc">
                <Swiper
                    slidesPerView={perView}
                    spaceBetween={0}
                    modules={[Pagination]}
                    className="mySwiper"
                    loop={true}
                >
                        <SwiperSlide>
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind01.png'} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind02.png'} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind03.png'} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind05.png'} alt="" /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href=""><img src={process.env.PUBLIC_URL+'/images/video/thumbnail/video_thumbnail_jobfind06.png'} alt="" /></a>
                        </SwiperSlide>
                </Swiper>
                </div>

            </div>
        </section>
    )
}

let perView;
window.addEventListener('load',setPerview);
window.addEventListener('resize',setPerview);
function setPerview(){
    let windowWidth = window.innerWidth;
    console.log(windowWidth);
    if(windowWidth>1500){
        perView = 7;
    }else if(windowWidth>1023){
        perView = 5;
    }else if(windowWidth>768){
        perView=3;
    }else if(windowWidth>500){
        perView= 2;
    } else{
        perView= 1;
    }
}


export{VideoSlide}