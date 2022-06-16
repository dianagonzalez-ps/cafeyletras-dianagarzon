import React from "react";
import './Slide.css';
import Slider1 from './slide_1.jpg';
import Slider2 from './slide_2.jpg';
import Slider3 from './slide_3.jpg';
import Slider4 from './slide_4.jpg';


function Slide(){
    return(
<div class="slider">
    <ul>
    <li><img src={Slider1} alt="img_slide1" /></li>                 
    <li><img src={Slider2} alt="img_slide2" /></li>                 
    <li><img src={Slider3} alt="img_slide3" /></li>                 
    <li><img src={Slider4} alt="img_slide4" /></li>
    </ul>
</div>
    )

}

export default Slide;
      