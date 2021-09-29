import { alterarMax, alterarMin } from "./actionTypes"

export function alterarNumeroMinimo(novoMin) {
    return {
        type: alterarMin,
        payload: novoMin
    }
}

export function alterarNumeroMaximo(novoMax) {
    return {
        type: alterarMax,
        payload: novoMax
    }
}