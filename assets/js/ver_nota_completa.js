const modificar_cabecera = (cabecera, Nota) => {
	cabecera.childNodes.forEach((nodo) => {
		if (nodo.id === 'entrada') {
			nodo.value = Nota.data.titulo_nota;
		}
	});
};
const modificar_cuerpo = (cuerpo, Nota) => {
	console.log(cuerpo.classList);

	cuerpo.classList.forEach((clase) => {
		if (clase.includes('fondo-color')) {
			cuerpo.classList.remove(clase);
			cuerpo.classList.add(Nota.propiedades.color_fondo);
		}
	});

	cuerpo.childNodes.forEach((nodo) => {
		if (nodo.id === 'area_notas') {
			cuerpo.dataset.color_fondo = Nota.propiedades.color_fondo;
			cuerpo.dataset.color_texto = Nota.propiedades.color_letra;
			nodo.value = Nota.data.contenido_nota;

			nodo.classList.forEach((clase) => {
				if (clase.includes('letra-color')) {
					nodo.classList.remove(clase);
					nodo.classList.add(Nota.propiedades.color_letra);
				}
			});
		}
	});
};
const modificar_footer = (footer, Nota) => {
	footer.childNodes.forEach((nodo) => {
		if (nodo.classList && nodo.classList[0] == 'Modification') {
			nodo.childNodes.forEach((nodo) => {
				if (nodo.id) {
					nodo.textContent = Nota.data.fecha_nota;
				}
			});
		}
	});
};

export const ver_nota_completa = (id, lista_de_notas, area_nota_completa) => {
	const [Nota] = lista_de_notas.buscarNota(id);
	let [cabecera, cuerpo, footer] = area_nota_completa;

	modificar_cabecera(cabecera, Nota);
	modificar_cuerpo(cuerpo, Nota);
	modificar_footer(footer, Nota);
};
