import Card from './Card';

import { connect } from 'react-redux';

function Media(props) {
	const { min, max } = props;
	return (
		<Card title="Média de Numeros" green>
			<div className="Intervalo">
				<span>
					<span>Resultado: </span>
					<strong>{(min + max) / 2}</strong>
				</span>
			</div>
		</Card>
	);
}

const mapStateToProps = (state) => {
	return {
		min: state.numeros.min,
		max: state.numeros.max
	};
};

export default connect(mapStateToProps)(Media);
