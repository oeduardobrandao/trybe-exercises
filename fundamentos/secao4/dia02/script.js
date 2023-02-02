const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = ondeVoceEsta.parentElement;
pai.style.backgroundColor = 'blue';

const primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Um texto';

const primeiroFilho = pai.firstElementChild;

const texto = ondeVoceEsta.parentElement.innerText;

const terceiroFilho = ondeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild;

const irmao = document.createElement('section');
pai.appendChild(irmao);
irmao.innerText = 'Irmão'

const terceiroFilhoDoFilho = document.createElement('section');
ondeVoceEsta.appendChild(terceiroFilhoDoFilho);
terceiroFilhoDoFilho.innerText = 'Terceiro filho do filho';

const primeiroFilhoDoPrimeiroFilho = document.createElement('section');
primeiroFilho.appendChild(primeiroFilhoDoPrimeiroFilho);
primeiroFilhoDoPrimeiroFilho.innerText = 'Primeiro filho do primeiro filho';

const terceiroFilho3 = primeiroFilhoDoPrimeiroFilho.parentElement.nextElementSibling.nextElementSibling;

ondeVoceEsta.removeChild(ondeVoceEsta.firstElementChild);