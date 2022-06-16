import Header from '../components/header/Header';
import Nabvar from '../components/navbar/Nabvar';
import Slide from '../components/slide/Slide';
import Calendar from '../components/calendar/Calendar';
import Eventos from '../components/tittleeventos/Eventos';
import Clubs from '../components/clubs/Clubs';
import Talleres from '../components/talleres/Talleres';
import Ciclos from '../components/ciclos/Ciclos';
import Footer from '../components/footer/Footer';
import Subfooter from '../components/Subfooter/Subfooter';



function Home(){
    return(
        <div>
            <Header/>
            <Nabvar/>
            <Slide/>
            <Calendar/>
            <Eventos/>
            <Clubs />
            <Talleres />
            <Ciclos />
            <Footer/>
            <Subfooter/>
            
        </div>
        
    );
}

export default Home;