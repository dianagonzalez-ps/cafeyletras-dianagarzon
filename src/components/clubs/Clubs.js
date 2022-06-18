import React from "react";
import './Clubs.css';
import { useModal } from "../hook/useModal";
import Card_3 from './card_3.jpg';
import Card_4 from './card_4.jpg';
import Card_5 from './card_5.jpg';
import Modal from '../modal/Modal';
import Line from './line.svg';



const Clubs = () => {

    const [isOPenModal1,openModal1,closeModal1]= useModal(false);
    const [isOPenModal2,openModal2,closeModal2]= useModal(false);
    const [isOPenModal3,openModal3,closeModal3]= useModal(false);
 
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
                    <button onClick={openModal1}class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>

                <div class="cardsClubs">
                    <div class="imgClubs"><img clas="imgevent" src={Card_4} alt="card4" /></div>
                    <h4>Club Entre Letras</h4>
                    <h4>Jóvenes y Adultos</h4>
                    <button onClick={openModal2}class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>


                <div class="cardsClubs">
                    <div class="imgClubs"><img clas="imgevent" src={Card_5} alt="card5" /></div>
                    <h4>Club Sabias Palabras</h4>
                    <h4>Adulto Mayor</h4>
                    <button onClick={openModal3} class="btn_act"><i class="fa-solid fa-eye"></i>Ver más</button>
                </div>

        <Modal isOpen={isOPenModal1} closeModal={closeModal1}>
            <h3> Club Entre Letras</h3>
            <img src={Line} alt="line" />
            <p>Se trata de un encuentro semanal donde los jóvenes y adultos amantes de la lectura conocen algunas obras y escritores más interesantes de la historia. Además, se explora y descubre la inevitable relación de la literatura con el arte, el cine, la música y demás manifestaciones culturales<br/>El único requisito para participar es tener la intención de leer y compartir la experiencia de la lectura con otras personas</p><br/><p class="text-asitencia"> Horarios: de 9:00am a 11am </p>
        </Modal>
        
        <Modal isOpen={isOPenModal2} closeModal={closeModal2}>
            <h3> Club Explorando Letras</h3>
            <img src={Line} alt="line" />
            <p>Este Club es dirigido para los niños y niñas se trata de un encuentro creativo en un espacio de respeto, escucha activa y empatía, donde desarrollan sus habilidades comunicativas conociendo universos diferentes por medio de los libros<br/>Este espacio pretende crear con la imaginación actividades coma creación de personajes a traves de la voz, improvisaciones sobre situaciones cotidianas, diálogos, debates, lecturas dramatizadas y cuentos entre otros</p><br/><p class="text-asitencia"> Horarios: Viernes de 1:00pm a 3:00pm </p>
            
        </Modal>
        <Modal isOpen={isOPenModal3} closeModal={closeModal3}>
        <h3> Club Sabias Palabras</h3>
            <img src={Line} alt="line" />
            <p>Este Club de lectura es dirigido a adultos mayores interesadas en compartir la lectura y los comentarios sobre las obras, y compartir experiencias por medio de su gran sabiduría <br/>Fomentamos la atención y nos olvidamos, durante todo el tiempo que abarcamos en la lectura, de nuestra situación personal y de otros aspectos, como la soledad</p><br/><p class="text-asitencia"> Horarios: Miércoles de 10:00am a 12:00pm </p>
        </Modal> 
            </section></>


);

}
export default Clubs;

