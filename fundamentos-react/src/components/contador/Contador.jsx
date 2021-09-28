import { Component } from 'react';

class Contador extends Component {
	state = {
		numero: this.props.numeroInicial
	};

    inc() {
        
    }

	render() {
		return (
			<div>
				<h2>Contador</h2>
				<p>Valor Inicial: {this.state.numero}</p>
			</div>
		);
	}
}

export default Contador;
