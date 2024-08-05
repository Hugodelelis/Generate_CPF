export default class isValidCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfClean', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, '')
        })
    }

    isSequence() {
        return this.cpfClean.charAt(0).repeat(11) === this.cpfClean;
    }

    newCpf() {
        const cpfNoDigits = this.cpfClean.slice(0, -2);
        const digit1 = ValidCPF.generateDigit(cpfNoDigits);
        const digit2 = ValidCPF.generateDigit(cpfNoDigits + digit1);
        this.newCPF = cpfNoDigits + digit1 + digit2;
    }
    
    static generateDigit(cpfNoDigits) {
        let tot = 0;
        let reverse = cpfNoDigits.length + 1;
    
        for(let stringNumber of cpfNoDigits) {
            tot += reverse * Number(stringNumber);
            reverse--;
        }
    
        const digit = 11 - (tot % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    valid() {
        if(!this.cpfClean) return false;
        if(typeof this.cpfClean !== 'string') return false;
        if(this.cpfClean.length !== 11) return false;
        if(this.isSequence()) return false;
        this.newCpf();
    
        return this.newCPF === this.cpfClean;
    }
}
