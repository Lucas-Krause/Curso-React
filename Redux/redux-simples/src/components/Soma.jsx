import { connect } from 'react-redux';
import Card from './Card';

function Soma(props) {
	const { min, max } = props;
	return (
		<Card title="Soma de Numeros" blue>
			<div className="Intervalo">
				<span>
					<span>Resultado: </span>
					<strong>{min + max}</strong>
				</span>
			</div>
		</Card>
	);
}

function mapState(state) {
	return {
		min: state.numeros.min,
		max: state.numeros.max
	};
}

export default connect(mapState)(Soma);
