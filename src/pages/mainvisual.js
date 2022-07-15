import {useState, useEffect} from 'react';

function Mainvisual(){
    return(
        <section className="mainVisual" id='mainVisual'>
            <div className="mvBoxWrap">
                <div className="mvBox">
                    <div className="univBox">
                        <img className='logo' src={process.env.PUBLIC_URL+'/images/main/cam_logo.png'} alt="" />
                        <div className="titleWrap">
                            <h1 className='mainTitle'>
                                가톨릭 관동대학교 
                            </h1>
                            <h2 className='subTitle'>
                            1:1 맞춤형 취업코칭 프로그램
                            </h2>
                            <div className="contextWrap">
                                <p className="context">
                                개별면담을 통한 진로설계코칭, 기업별 채용 경향을<br></br>
                                심도 깊게 분석해 차별화된 전략까지<br></br>
                                <strong>공기업, 대기업, 중견기업까지 스마트하게 코칭받자!</strong>
                                </p>
                            </div>
                            <div className="btnArea">
                                <a className='univ_btn roundRect_btn' href="">
                                    <span>취업코칭 요청하기</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="aboutCamcoWrap">
                        <button className="about_CamCo" onClick={aboutCamco_click}>
                                <div className="CamCoImg"></div>
                                <span className="CamCoTxt one">캠퍼스코치잡이란?</span>
                                <span className="CamCoTxt two">자세히 알아보려면 <span className="click_flicker">Click</span></span>
                                <video className="CamCo_video" controls loop autoPlay muted>
                                    <source src="" type="video/mp4"/>
                                    IE 버전을 업데이트 하시길 바랍니다.
                                </video>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}
function aboutCamco_click(){
    let $AboutCamCo = document.querySelector('.about_CamCo');
    let $CamCoVideo = document.querySelector('.CamCo_video');
    let $CamCoVideoSource = document.querySelector('.CamCo_video source');
    // let $TitH1 = document.querySelector('.tit_h1');
    // let $NullBox = document.querySelector('.mv_nullbox');
    if ($AboutCamCo.classList.contains('on')) {
        $AboutCamCo.classList.remove('on');
        $CamCoVideo.pause();
        $CamCoVideoSource.src = '';
        $CamCoVideo.load();
        $CamCoVideo.play();
    } else {
        $AboutCamCo.classList.add('on');
        $CamCoVideo.pause();
        $CamCoVideoSource.src = process.env.PUBLIC_URL+'/images/video/CoachJobMV.mp4';
        $CamCoVideo.load();
        $CamCoVideo.play();
    }

}
export{Mainvisual}