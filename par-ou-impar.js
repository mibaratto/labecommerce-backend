
const parOuImpar = process.argv[2]
const numeroEscolhido = +process.argv[3]

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
const numeroRandomico = getRandomArbitrary(0, 10)


const verificaNumero = (numeroRandomico, numeroEscolhido ) => {
    const somaNumeros = numeroEscolhido + numeroRandomico
    // console.log("SOMA",somaNumeros)
    if (somaNumeros % 2 === 0) {
        return ("par")
    } else {
        return ("impar")
    }
    
}

const verificaVencedor = (numeroRandomico, numeroEscolhido ) => {
    const resultado = verificaNumero(numeroRandomico, numeroEscolhido )
    if (resultado === parOuImpar ) {
        console.log("Você ganhou")
    } else {
        console.log("Você perdeu")
    }
}


console.log(`Você jogou ${parOuImpar} e o número ${numeroEscolhido},
o computador jogou ${numeroRandomico},
a soma é ${numeroEscolhido + numeroRandomico}, um número ${verificaNumero(numeroRandomico, numeroEscolhido)}`)

verificaVencedor(numeroRandomico, numeroEscolhido )