import { useState } from 'react/cjs/react.development';
import IndiretaFilho from './IndiretaFilho';

export default function IndiretaPai(props) {
	let [ nome, setNome ] = useState('?');
	let [ idade, setIdade ] = useState(0);
	let [ nerd, setNerd ] = useState(false);

	function fornecerInformacoes(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}

	return (
		<div>
			<div>
				<span>{nome} </span>
				<span>{idade} </span>
				<span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
			</div>
			<IndiretaFilho fornecerInformacoes={fornecerInformacoes} />
		</div>
	);
}
