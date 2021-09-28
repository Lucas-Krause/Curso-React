import { Component } from 'react';
import Display from './Display';
import './Contador.css';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {
	state = {
		numero: this.props.numeroInicial || 0,
		passo: this.props.passoInicial || 5
	};

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo
		});
	};

	setPasso = (novoPasso) => {
		this.setState({
			passo: novoPasso
		});
	};

	render() {
		return (
			<div className="Contador">
				<Display numero={this.state.numero} />
				<PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
				<Botoes decrement={this.dec} increment={this.inc} />
			</div>
		);
	}
}

export default Contador;
