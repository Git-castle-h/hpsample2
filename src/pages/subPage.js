import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Sub(){
    return(
        <section className="Sub">
                <div className="subVisual">
                    <h1 className='title'>서브페이지</h1>
                </div>
            <div className="tabArea" onClick={subTabClick}>
                <div className="tabWrap" >
                    <button className="tab tab1 on">Sub tab1</button>
                    <button className="tab tab2">Sub tab2</button>
                    <button className="tab tab3">Sub tab3</button>
                </div>
            </div>
            <section className='subName sub on'>
                <div className="titleArea">
                    <div className="mainTitleWrap">
                        <h1 className="mainTitle">서브페이지1 타이틀</h1>
                    </div>
                    <div className="subTitleWrap">
                        <h2 className="subTitle">서브페이지1 서브타이틀</h2>
                    </div>
                </div>
                <div className="contextArea">
                    <div className="imageWrap">
                    </div>
                    <div className="textWrap">
                        <p>
                        마디씩 것은 노새, 한 있습니다. 나는 속의 했던 멀리 이름을 헤는 써 나의 까닭입니다. 하나에 아침이 둘 멀리 까닭입니다. 노새, 어머님, 가을 겨울이 하나에 사랑과 프랑시스 계십니다. 아침이 덮어 별 오면 한 봅니다. 다 별들을 새겨지는 책상을 없이 내 듯합니다. 별 벌레는 나의 거외다. 어머니, 어머니 이름과, 덮어 속의 이름과, 나는 파란 봅니다. 이 이국 나는 토끼, 사람들의 다 걱정도 하나에 계십니다. 옥 멀리 써 별 이름을 토끼, 위에 경, 별 까닭입니다. 나는 하나에 겨울이 소학교 사람들의 하나에 못 덮어 아무 듯합니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className='subName sub'>
                <div className="titleArea">
                    <div className="mainTitleWrap">
                        <h1 className="mainTitle">서브페이지2 타이틀</h1>
                    </div>
                    <div className="subTitleWrap">
                        <h2 className="subTitle">서브페이지2 서브타이틀</h2>
                    </div>
                </div>
                <div className="contextArea">
                    <div className="imageWrap">
                    </div>
                    <div className="textWrap">
                        <p>
                        마디씩 것은 노새, 한 있습니다. 나는 속의 했던 멀리 이름을 헤는 써 나의 까닭입니다. 하나에 아침이 둘 멀리 까닭입니다. 노새, 어머님, 가을 겨울이 하나에 사랑과 프랑시스 계십니다. 아침이 덮어 별 오면 한 봅니다. 다 별들을 새겨지는 책상을 없이 내 듯합니다. 별 벌레는 나의 거외다. 어머니, 어머니 이름과, 덮어 속의 이름과, 나는 파란 봅니다. 이 이국 나는 토끼, 사람들의 다 걱정도 하나에 계십니다. 옥 멀리 써 별 이름을 토끼, 위에 경, 별 까닭입니다. 나는 하나에 겨울이 소학교 사람들의 하나에 못 덮어 아무 듯합니다.
                        </p>
                    </div>
                </div>
            </section>
            <section className='subName sub'>
                <div className="titleArea">
                    <div className="mainTitleWrap">
                        <h1 className="mainTitle">서브페이지3 타이틀</h1>
                    </div>
                    <div className="subTitleWrap">
                        <h2 className="subTitle">서브페이지3 서브타이틀</h2>
                    </div>
                </div>
                <div className="contextArea">
                    <div className="imageWrap">
                    </div>
                    <div className="textWrap">
                        <p>
                        마디씩 것은 노새, 한 있습니다. 나는 속의 했던 멀리 이름을 헤는 써 나의 까닭입니다. 하나에 아침이 둘 멀리 까닭입니다. 노새, 어머님, 가을 겨울이 하나에 사랑과 프랑시스 계십니다. 아침이 덮어 별 오면 한 봅니다. 다 별들을 새겨지는 책상을 없이 내 듯합니다. 별 벌레는 나의 거외다. 어머니, 어머니 이름과, 덮어 속의 이름과, 나는 파란 봅니다. 이 이국 나는 토끼, 사람들의 다 걱정도 하나에 계십니다. 옥 멀리 써 별 이름을 토끼, 위에 경, 별 까닭입니다. 나는 하나에 겨울이 소학교 사람들의 하나에 못 덮어 아무 듯합니다.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}
let tabArr;
let subArr;

function subTabClick(evt){
    tabArr  = document.querySelectorAll('.Sub .tabArea .tab');
    subArr = document.querySelectorAll('.Sub section.sub');

    for(let ie11i = 0; ie11i < tabArr.length; ie11i++){
        let i = ie11i;

        tabArr[i].addEventListener('click',function(){
            for(let ie11x = 0; ie11x<tabArr.length; ie11x++){
                let x = ie11x;
                tabArr[x].classList.remove('on');
            }
            tabArr[i].classList.add('on');
            for(let ie11e = 0; ie11e<subArr.length; ie11e++){
                let e = ie11e;
                subArr[e].classList.remove('on');
            }
            subArr[i].classList.add('on');
        })

    }

}
export{Sub}