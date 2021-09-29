import React, { useReducer, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
	other: '...',
	number: 0,
	user: null
};

const initialState2 = {
	number: 0
};

function reducer2(state, action) {
	switch (action.type) {
		case 'numberMultiply7':
			return { ...state, number: state.number * 7 };
		case 'numberDivide5':
			return { ...state, number: state.number / 5 };
		case 'numberInt':
			return { ...state, number: parseInt(state.number) };
		case 'numberAddN':
			return { ...state, number: state.number + parseInt(action.payload) };
		default:
			return state;
	}
}

function reducer(state, action) {
	switch (action.type) {
		case 'numberAdd2':
			return { ...state, number: state.number + 2 };
		default:
			return state;
	}
}

const UseReducer = (props) => {
	const [ state1, exec ] = useReducer(reducer, initialState);

	const [ state, dispatch ] = useReducer(reducer2, initialState2);

	const [ number, setNumber ] = useState(0);

	return (
		<div className="UseReducer">
			<PageTitle title="Hook UseReducer" subtitle="Uma outra forma de ter estado em componentes funcionais!" />
			<SectionTitle title="Exercicio #01" />
			<div className="center">
				<span className="text">{state.number}</span>
				<div>
					<input type="number" className="input" onChange={(e) => setNumber(e.target.value)} />
					<button className="btn" onClick={() => dispatch({ type: 'numberAddN', payload: number })}>
						+
					</button>
				</div>
				<div>
					<button className="btn" onClick={() => dispatch({ type: 'numberMultiply7' })}>
						number * 7
					</button>
					<button className="btn" onClick={() => dispatch({ type: 'numberDivide5' })}>
						number / 5
					</button>
					<button className="btn" onClick={() => dispatch({ type: 'numberInt' })}>
						number Int
					</button>
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
