import "./App.css";
import Card from "./componentes/Card";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Generales de la Segunda Guerra Mundial</h1>
        <Card
          imagen="rommel"
          nombre="Erwin Rommel"
          cargo="General del Africa Korps"
          texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi perspiciatis veritatis eos aliquid officiis, quasi nisi fugiat saepe expedita inventore aut quidem qui, provident esse laborum ratione reprehenderit quas!"
        />
        <Card
          imagen="de gaulle"
          nombre="Charles de Gaulle"
          cargo="Mariscal de Francia"
          texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi perspiciatis veritatis eos aliquid officiis, quasi nisi fugiat saepe expedita inventore aut quidem qui, provident esse laborum ratione reprehenderit quas!"
        />
        <Card
          imagen="von manstein"
          nombre="Erich von Manstein"
          cargo="General del ejercito aleman"
          texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi perspiciatis veritatis eos aliquid officiis, quasi nisi fugiat saepe expedita inventore aut quidem qui, provident esse laborum ratione reprehenderit quas!"
        />
      </div>
    </div>
  );
}

export default App;
