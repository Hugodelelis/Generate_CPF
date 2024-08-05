import GenCPF from './assets/modules/genCPF'
import './assets/css/style.css';

const generate =  document.querySelector('#generate')

generate.addEventListener('click', function() {
    const gen = new GenCPF()
    const genCPF = document.querySelector('.newCPF')
    genCPF.innerHTML = gen.genNewCPF()
})