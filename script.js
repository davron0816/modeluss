import calculate, {add as yigindi, subtract as ayirma, Kopayma as kopayma, Bolinma as BOlinma} from "./modelu.js";

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const Result = document.getElementById('result');


    document.getElementById('add').addEventListener('click', () => {
        result.textContent = `Natija: ${yigindi(Number(num1.value), Number(num2.value))}`
    })
    document.getElementById('subtract').addEventListener('click', () => {
        result.textContent = `Natija: ${Natija(Number(num1.value), Number(num2.value))}`
    })
    document.getElementById('Kopayma').addEventListener('click', () => {
        result.textContent = `Natija: ${Kopayma(Number(num1.value), Number(num2.value))}`
    })
    document.getElementById('Kopayma').addEventListener('click', () => {
        result.textContent = `Natija: ${Kopayma(Number(num1.value), Number(num2.value))}`
    })

})