function tocaSom (idElementoAudio){
	document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){
	let tecla = listaDeTeclas[contador].classList[1];
	let idAudio = `#som_${tecla}`;

	listaDeTeclas[contador].onclick = function () {
		tocaSom(idAudio);
	}

	tecla.onkeydown = function () {
		tecla.classList.add('ativa');
	}
}
