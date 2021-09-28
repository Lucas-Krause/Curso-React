export default function IndiretaFilho(props) {
	const min = 18;
	const max = 70;
	const gerarIdade = Math.floor(Math.random() * ((min - max + 1) * -1) + min);
    const gerarNerd = Math.random() > 0.5
	return (
		<div>
			<div>Filho</div>
			<button onClick={(_) => props.fornecerInformacoes('João', gerarIdade, gerarNerd)}>Fornecer Informações</button>
		</div>
	);
}
