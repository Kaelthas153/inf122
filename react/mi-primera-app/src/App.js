  import logo from './logo.svg';
  import './App.css';
  import Evento from './components/Evento';
  import EventoB from './components/EventoB';


  function App() {
    return (
      <div className="App">
        <Evento/>
        <EventoB title="MeetUp 08 - Revolutionize your Development using TDD"
        image="evento2"
        dateLiteral="15 de Abril de 2023"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz
        En este Meet Up tendremos la participación de Reddy Tintaya Conde
        En esta charla Reddy nos presentara: Revolutionize your Development using TDD
       
        "
        icon1="facebook"
        icon3="twitter"
        icon2="youtube"
      />

      </div>
    );
  }

  export default App;
