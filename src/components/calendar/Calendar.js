import React from "react";
import './Calendar.css';
import Line from './line.svg';



function Calendar(){
    return(

<><div class="tittleActivities_1">
<h4 class="captActivities">Calendario de Actividades</h4>
    <img src={Line} alt="line" />
</div>
<div class="calendarCont">
        <h1 class="tittleCalendar">MAYO 2022</h1>
        <ol class="calendar">
            <li class="day dayName">L</li>
            <li class="day dayName">M</li>
            <li class="day dayName">M</li>
            <li class="day dayName">J</li>
            <li class="day dayName">V</li>
            <li class="day dayName">S</li>
            <li class="day dayName">D</li>

            <li class="day first-day">1</li>
            <li class="day">2</li>
            <li class="day">3</li>
            <li class="day">4</li>
            <li class="day">5</li>
            <li class="day">6</li>
            <li class="day">7</li>
            <li class="day">8</li>
            <li class="day">9</li>
            <li class="day">10</li>
            <li class="day">11</li>
            <li class="day">12</li>
            <li class="day">13</li>
            <li class="day">14</li>
            <li class="day">15</li>
            <li class="day">16</li>
            <li class="day">17</li>
            <li class="day">18</li>
            <li class="day">19</li>
            <li class="day">20</li>
            <li class="day">21</li>
            <li class="day">22</li>
            <li class="day">23</li>
            <li class="day">24</li>
            <li class="day">25</li>
            <li class="day">26</li>
            <li class="day">27</li>
            <li class="day">28</li>
            <li class="day">29</li>
            <li class="day">30</li>
        </ol>

    </div></>


    );

}

export default Calendar;