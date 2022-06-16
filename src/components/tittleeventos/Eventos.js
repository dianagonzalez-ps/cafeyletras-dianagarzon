import React from "react";
import './Eventos.css';
import Line from './line.svg';
import Card_1 from './card_1.jpg';
import Card_2 from './card_2.jpg';


function Eventos(){
    return(
    <><div class="tittleActivities_2">
    <h4 class="captActivities">Eventos Destacados del Mes</h4>
    <img src={Line} alt="line" />
    </div>

    <section class="sectionEvents">
    <div class="cardsEvents">
        <h4 class="tDate">Mayo 21</h4>
    <img clas="imgevent" src={Card_1} alt="card1" />
        <h3 class="tTxt">Taller la vida entre las letras</h3>
    </div>

    <div class="cardsEvents">
       <h4 class="tDate">Mayo 30</h4>
       <img clas="imgevent" src={Card_2} alt="card2" />
          <h3 class="tTxt">Taller construyendo historias</h3>
         </div>
    
</section></>

);

}
export default Eventos;

