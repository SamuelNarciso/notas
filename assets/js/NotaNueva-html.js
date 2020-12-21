export const crearNotaPreview_li = (nuevaNota, contenedor_colocar) => {
	let { titulo_nota, contenido_nota, fecha_nota } = nuevaNota.data;
	let { color_fondo, color_letra, id_nota } = nuevaNota.propiedades;

	contenido_nota =	contenido_nota.length > 60 ? contenido_nota.slice(0, 60) : contenido_nota;
	titulo_nota = titulo_nota.length > 22 ? titulo_nota.slice(0, 22) : titulo_nota;

	const nota_li = `
	<li class="note_item  ${color_fondo}" id="${id_nota}">
	<span class="titulo_nota_item_vistaPrevia ">${titulo_nota} 
	<i class="material-icons delete-icon"> delete </i>
	</span>
	<span class="content_note ${color_letra} ">
		${contenido_nota}
	</span>
	</li>`;
	const div = document.createElement('div');
	div.innerHTML = nota_li;
	contenedor_colocar.append(div.firstElementChild);
};
