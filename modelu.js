export function add(a, b){
    return a + b;

}
export function subtract(a, b){
    return a - b;

}
export function Kopayma(a, b){
    return a * b;

}
export function Bolinma(a, b){
    return b !== 0 ? a/b : 'Error';

}

export default function calculate(operation, a, b){
    switch(operation){
        case 'add': return add(a, b)
        case 'subtract': return subtract(a, b);
        case 'Kopayma': return Kopayma(a, b);
        case 'Kopayma': return Bolinma(a, b);
        default: return 'Error'
    }
}