import First from "../basics/First";
import Fragmento from "../basics/Fragmento";
import ComParametro from "../basics/ComParametro";
import Aleatorio from "../basics/Aleatorio";
import Card from "../layout/Card";
import "./App.css";
import Familia from "../basics/Familia";
import FamiliaMembro from "../basics/FamiliaMembro";
import ListaAlunos from "../repeticao/ListaAlunos";
import TabelaProdutos from "../repeticao/TabelaProdutos";

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
      <Card
          titulo="#07 - Desafio Produtos"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <TabelaProdutos></TabelaProdutos>
        </Card>
      <Card
          titulo="#06 - Repetição"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card
          titulo="#05 - Familia"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo" />
          </Familia>
        </Card>
        <Card
          titulo="#04 - Desafio Aleatório"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <Aleatorio min={0} max={100} />
        </Card>
        <Card
          titulo="#03 - Fragmento"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <Fragmento />
        </Card>
        <Card
          titulo="#02 - ComParâmetro"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!" />
        </Card>
        <Card
          titulo="#01 - First"
          color={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        >
          <First />
        </Card>
      </div>
    </div>
  );
}
