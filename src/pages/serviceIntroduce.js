import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function ServiceIntroduce(){
    return(
        <section className='ServiceIntro' id='ServiceIntro'>
            <div className="bg66"></div>
            <div className="bg33"></div>
            <h1 className="screen_out">온라인 취업코칭에 대한 설명입니다.</h1>
            <div className="cardArea">
                <div className="cardWrap">
                    <div className="card">
                        <div className="imgWrap">
                            <img src={process.env.PUBLIC_URL+'/images/main/service_online.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                언제 어디서나 <strong>모바일을 통한</strong> <span style={{display:'inline-block'}}>온라인 코칭 신청 가능</span>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgWrap">
                        <img src={process.env.PUBLIC_URL+'/images/main/service_talyored.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                전담코치가 1:1 <span style={{display:'inline-block'}}><strong>온라인 맞춤 코칭</strong> 제공</span>
                            </p>
                        </div>
                    </div><div className="card">
                        <div className="imgWrap">
                        <img src={process.env.PUBLIC_URL+'/images/main/service_mobile.png'} alt="" />
                        </div>
                        <div className="textWrap">
                            <p className='text'>
                                나에게 맞는 <span style={{display:'inline-block'}}>맞춤 <strong>추천 채용정보</strong> 제공</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btnArea">
                    <a href='subpage' className="btn">취업코칭 신청하기</a>
                </div>
            </div>
        </section>
    )
}


export{ServiceIntroduce}