import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
	let n = parseInt(num);
	if (n < 0) return 'Não Existe';
	if (n === 0) return 1;
	let fatorial = n;
	for (let i = n - 1; i >= 1; i--) {
		fatorial *= i;
	}
	return fatorial;
}

function isOddOrEven(num) {
	if (num % 2 === 0) {
		return 'Par';
	} else {
		return 'Impar';
	}
}

const UseEffect = (props) => {
	const [ number, setNumber ] = useState(1);
	const [ fatorial, setFatorial ] = useState(1);
	const [ number2, setNumber2 ] = useState(0);
	const [ status, setStatus ] = useState(isOddOrEven(number2));

	useEffect(
		function() {
			setFatorial(calcFatorial(number));
		},
		[ number ]
	);

	useEffect(
		() => {
			if (fatorial > 10100101) {
				document.title = 'EITA !!!!!';
			}
		},
		[ fatorial ]
	);

	useEffect(
		() => {
			setStatus(isOddOrEven(number2));
		},
		[ number2 ]
	);

	return (
		<div className="UseEffect">
			<PageTitle
				title="Hook UseEffect"
				subtitle="Permite executar efeitos colaterais em componentes funcionais!"
			/>
			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<div>
					<span className="text">Fatorial: </span>
					<span className="text red">{fatorial}</span>
				</div>
				<input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
			</div>
			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<div>
					<span className="text">Status: </span>
					<span className="text red">{status}</span>
				</div>
				<input type="number" className="input" value={number2} onChange={(e) => setNumber2(e.target.value)} />
			</div>
		</div>
	);
};

export default UseEffect;
