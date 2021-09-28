export default function Botoes(props) {
	return (
		<div>
			<button onClick={props.decrement}>-</button>
			<button onClick={props.increment}>+</button>
		</div>
	);
}
