import React from "react";
import './Clubs.css';
import Card_3 from './card_3.jpg';
import Card_4 from './card_4.jpg';
import Card_5 from './card_5.jpg';
import Line from './line.svg';



function Activities(){
    return(
        <><div class="tittleActivities1">
            <h3 class="tactivites">ACTIVIDADES</h3>
            <h4 class="captActivities">Clubes</h4>
            <img src={Line} alt="line" />
        </div>

        <section class="sectionClubs">
                <div class="cardsClubs">
                    <div class="imgClubs"><img clas="imgevent" src={Card_3} alt="card3" /></div>
                    <h4>Club Explorando Letras</h4>
                    <h4>Niños</h4>
                    <button class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>

                <div class="cardsClubs">
                    <div class="imgClubs"><img clas="imgevent" src={Card_4} alt="card4" /></div>
                    <h4>Club Entre Letras</h4>
                    <h4>Jóvenes y Adultos</h4>
                    <button class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>


                <div class="cardsClubs">
                    <div class="imgClubs"><img clas="imgevent" src={Card_5} alt="card5" /></div>
                    <h4>Club Sabias Palabras</h4>
                    <h4>Adulto Mayor</h4>
                    <button class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>

            </section></>
);

}
export default Activities;

