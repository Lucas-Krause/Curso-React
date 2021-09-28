function gerarNumeros(quantidade) {
	const numerosMega = [];
	for (let i = 0; i < quantidade; i++) {
		const numeroRandom = Math.floor(Math.random() * ((1 - 60 + 1) * -1) + 1);
		if (numerosMega.includes(numeroRandom)) {
			i--;
		} else {
			numerosMega.push(numeroRandom);
		}
	}
	return numerosMega.sort((a, b) => a - b);
}
resultado = gerarNumeros(5);
console.log(resultado);

function gerarNumerosNaoContidos(min, max, array) {
	const aleatorio = parseInt(Math.random() * (max - min + 1) + min);
	return array.includes(aleatorio) ? gerarNumerosNaoContidos(min, max, array) : aleatorio;
}

function gerarNumerosCorreto(quantidade) {
	const numeros = Array(quantidade)
		.fill(0)
		.reduce((nums) => {
			const novoNumero = gerarNumerosNaoContidos(1, 60, nums);
			return [ ...nums, novoNumero ];
		}, [])
		.sort((n1, n2) => n1 - n2);

	return numeros;
}

console.log(gerarNumerosCorreto(6))
