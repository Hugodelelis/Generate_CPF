import isValidCPF from './isValidCPF'

export default class GenCPF {
    rand(min = 10000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    format(cpf) {
        return (
            cpf.slice(0,3) + '.' +
            cpf.slice(3,6) + '.' +
            cpf.slice(6,9) + '-' +
            cpf.slice(9,11)
        )
    }

    genNewCPF() {
        const CPFnoDigit = this.rand()
        const digit1 = isValidCPF.generateDigit(CPFnoDigit)
        const digit2 = isValidCPF.generateDigit(CPFnoDigit + digit1)
        const newCPF = CPFnoDigit + digit1 + digit2
        return this.format(newCPF)
    }
}