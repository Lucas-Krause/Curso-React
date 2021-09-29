import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
	const context = useContext(DataContext);

	function setNumberContext(params) {
		context.setState({
			...context.state,
			number: context.state.number + params
		});
	}

	const { number, text, setText, setNumber } = useContext(AppContext);

	useEffect(
		() => {
			if (number > 1250) {
				setText('!!!');
			}
		},
		[ number ]
	);

	return (
		<div className="UseContext">
			<PageTitle
				title="Hook UseContext"
				subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
			/>
			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<span className="text">{context.state.number}</span>
				<span className="text">{context.state.text}</span>

				<div>
					<button className="btn" onClick={() => setNumberContext(1)}>
						+1
					</button>
				</div>
			</div>
			<SectionTitle title="Exercicio #02" />
			<div className="center">
				<span className="text">{text}</span>
				<span className="text">{number}</span>
				<div>
					<button className="btn" onClick={() => setNumber(number - 1)}>
						-1
					</button>
					<button className="btn" onClick={() => setNumber(number + 1)}>
						+1
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseContext;
