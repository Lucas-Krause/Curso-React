import { useState } from 'react';
import './Mega.css';

export default function Mega(props) {
	const [ quantidadeNumeros, setQuantidadeNumeros ] = useState(props.qtde || 6);

	const numerosIniciais = onGerar(quantidadeNumeros);

	const [ numeros, setNumeros ] = useState(numerosIniciais);

	function onGerar() {
		let numerosMega = [];
		for (let i = 0; i < quantidadeNumeros; i++) {
			const numeroRandom = Math.floor(Math.random() * ((1 - 60 + 1) * -1) + 1);
			if (numerosMega.includes(numeroRandom)) {
				i--;
			} else {
				numerosMega.push(numeroRandom);
			}
		}
		return numerosMega.sort((a, b) => a - b);
	}

	return (
		<div className="Mega">
			<h2>Numeros Mega Cena</h2>
			<h3>{numeros.join(' - ')}</h3>
			<div>
				<label htmlFor="quantidadeNumeros">Quantidade: </label>
				<input
					id="quantidadeNumeros"
					type="number"
					value={quantidadeNumeros}
					min="6"
					max="15"
					onChange={(e) => {
                        setQuantidadeNumeros(+e.target.value)
                        setNumeros(onGerar(+e.target.value))
                    }}
				/>
			</div>
			<button onClick={(e) => setNumeros(onGerar(quantidadeNumeros))}>Gerar</button>
		</div>
	);
}
