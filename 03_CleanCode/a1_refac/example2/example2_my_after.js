
const FACTOR_DIGIT_1 = 10;
const FACTOR_DIGIT_2 = 11;

function validate(cpfRaw) {
    if (!cpfRaw) return false;
    cpf=clear(cpfRaw);
    if (isValidLength(cpf)) return false;              
    if (isBlocked(cpf)) return false;                                                                              
    const digit1 = calculateDigit(cpf, FACTOR_DIGIT_1); 
    const digit2 = calculateDigit(cpf, FACTOR_DIGIT_2);                    
    const atualDigit = cpf.slice(9);  
    const calculatedDigit = `${digit1}${digit2}`;  
    return atualDigit == calculatedDigit;  
}

function clear(cpf) {
    return cpf.replace(/[\.\-]*/g, "");
}

const isValidLength = (cpf) => {
    return cpf.length !== 11;
}

const isBlocked = (cpf) => {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}

const calculateDigit = (cpf, factor) => {
    let total = 0
    for (const digit of cpf) {
        if (factor > 1) total +=parseInt(digit) * factor --;
    }
    const rest = total % 11
    return rest < 2 ? 0 : 11 - rest;
}

module.exports = {
    validate
}
