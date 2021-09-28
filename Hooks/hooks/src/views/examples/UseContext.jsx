import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';

const UseContext = (props) => {
	const context = useContext(DataContext);

	function setNumber(params) {
		context.setState({
			...context.state,
			number: context.state.number + params
		});
	}

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
                    <button className="btn" onClick={() => setNumber(1)}>+1</button>
                </div>
			</div>
		</div>
	);
};

export default UseContext;
