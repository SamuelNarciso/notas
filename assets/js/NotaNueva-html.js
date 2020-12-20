export const crearNotaPreview_li = (nuevaNota,contenedor_colocar) => {
	let contenidoNota_preview = nuevaNota.nota_contenido;
	let tituloNota_preview = nuevaNota.titulo_nota;

	// TODO: Cantidad maxima de letras en contenido preview = 60;
	// TODO: Cantidad maxima de letras en titulo preview = 22;
	contenidoNota_preview =
		contenidoNota_preview.length > 60
			? contenidoNota_preview.slice(0, 60)
			: contenidoNota_preview;

	tituloNota_preview =
		tituloNota_preview.length > 22
			? tituloNota_preview.slice(0, 22)
			: tituloNota_preview;

	const nota_li = `
	<li class="note_item " id="${nuevaNota.id_nota}">
	<span class="titulo_nota_item_vistaPrevia ">${tituloNota_preview} 
	<i class="material-icons delete-icon"> delete </i>
	</span>
	<span class="content_note ">
		${contenidoNota_preview}
	</span>
	</li>`;
	const div = document.createElement('div');
	div.innerHTML = nota_li;
	contenedor_colocar.append(div.firstElementChild);
};