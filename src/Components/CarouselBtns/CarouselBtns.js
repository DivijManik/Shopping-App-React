import React from 'react';
import ReactDOM from 'react-dom/client';
import './CarouselBtns.css';

import ArrowFrwImg from './Images/arrowFrw.svg';
import ArrowPrevImg from './Images/arrowBack.svg';

// Carosuel Btns
function btnFrw(clickHandler) {
    return (
        <button className='CarouselBtnFrw' onClick={() => clickHandler()}><img src={ArrowFrwImg} /></button>
    )
}
function btnPrev(clickHandler) {
    return (
        <button className='CarouselBtnPrev' onClick={() => clickHandler()}><img src={ArrowPrevImg} /></button>
    )
}
// End

export default [
    btnFrw,
    btnPrev
]

