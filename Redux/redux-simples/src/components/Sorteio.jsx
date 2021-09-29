import { connect } from 'react-redux';
import Card from './Card';

function Sorteio(props) {
	const { min, max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
	return (
		<Card title="Sorteio de um Numero" purple>
			<div className="Intervalo">
				<span>
					<span>Resultado: </span>
					<strong>{aleatorio}</strong>
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

export default connect(mapState)(Sorteio);
