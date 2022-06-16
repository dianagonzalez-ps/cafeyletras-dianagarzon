import React from "react";
import './Ciclos.css';
import Card_8 from './card_8.jpg';
import Card_9 from './card_9.jpg';
import Card_10 from './card_10.jpg';
import Line from './line.svg';



function Ciclos(){
    return(

<section class="sectionClubs_2">

    <div class="tittleActivities_5">
        <h4 class="captActivities">Círculos Temáticos</h4>
        <img src={Line} alt="line" />
    </div>
    
<div class="sectcardsclubs_2">
    <div class="cardsClubs_2">
        <div class="imgClubs_2"><img src={Card_8} alt="Card_8" /></div>
        <h4>Poesía</h4> 
    </div>

    <div class="cardsClubs_2">
        <div class="imgClubs_2"><img src={Card_9} alt="Card_9" /></div>
        <h4>Ciencia</h4>
    </div>

    <div class="cardsClubs_2">
        <div class="imgClubs_2"><img src={Card_10} alt="Card_10" /></div>
        <h4>Filosofía</h4>
    </div>
</div>
</section>

    );
}

export default Ciclos;