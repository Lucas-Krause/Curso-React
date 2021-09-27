export default function Aleatorio(props) {
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * ((min - max + 1) * -1) + min);

  return (
    <div>
      <h2>
        Valor Aleatório:
      </h2>
      <p>
        <strong>Valor Minimo: {min}</strong>
      </p>
      <p>
        <strong>Valor Maximo: {max}</strong>
      </p>
      <p>
        <strong>Valor Selecionado: {aleatorio}</strong>
      </p>
    </div>
  );
}
