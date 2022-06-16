import React from "react";
import './Talleres.css';
import Card_6 from './card_6.png';
import Card_7 from './card_7.jpg';
import Line from './line.svg';



function Talleres(){
    return(
        
        <><div class="tittleActivities_4">
                <h4 class="captActivities">Talleres</h4>
                <img src={Line} alt="line" />
            </div>
        <section class="sectionEvents_2">
                    <div class="cardsEvents_2">
                        <img src={Card_6} alt="card_6" />
                        <h3 class="tTxt">Talleres de Lectura</h3>
                    </div>
        
                <div class="cardsEvents_2">
                    <img src={Card_7} alt="card_7" />
                    <h3 class="tTxt">Talleres de Escritura</h3>
                </div>
        </section></>
        

    );
}

export default Talleres;