function tocaSom (idElementoAudio){
	document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length){
	let tecla = listaDeTeclas[contador].classList[1];
	let idAudio = `#som_${tecla}`;


	listaDeTeclas[contador].onclick = function () {
		tocaSom(idAudio);
	}
	contador++;
}