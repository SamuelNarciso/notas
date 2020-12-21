export const ver_nota_completa = (id, lista_de_notas, area_nota_completa) => {
	console.log(id);
	const [Nota] = lista_de_notas.buscarNota(id);

	let [cabecera, cuerpo, footer] = area_nota_completa;
	// document.getElementById
	cabecera.childNodes.forEach((nodo) => {
		if (nodo.id === 'entrada') {
			// console.log(nodo);
			nodo.value = Nota.data.titulo_nota;
		}
	});

	console.log(cuerpo.childNodes);

	cuerpo.childNodes.forEach((nodo) => {
		if (nodo.id === 'area_notas') {
			// console.log(nodo);
			nodo.value = Nota.data.contenido_nota;
		}
	});

	footer.childNodes.forEach((nodo) => {
		if (nodo.classList && nodo.classList[0] == 'Modification') {
            // console.log(nodo);
            nodo.childNodes.forEach((nodo) =>{
                if(nodo.id){
nodo.textContent = 'Algo asi como una fecha'
                    // console.log(nodo.childNodes.textContent = "no se algo como una fecha"  );
                }
            } )
		}
	});

	// console.log(cuerpo);
	// console.log(footer);

	// titulo_nota.textContent = "hola";
	// const idNota = e.target.parentElement.id;
	// titulo_nota.setAttribute('disabled', '');
	// area_nota.setAttribute('disabled', '');
	// elementos_area_nota_completa=area_nota_completa.getElementsByTagName('div');

	// console.log(Nota);
	// area_nota.value = notaRecibida.nota_contenido;
	// titulo_nota.value = notaRecibida.titulo_nota;
};
