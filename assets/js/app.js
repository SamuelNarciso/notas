import {Nota} from './Nota.class.js';
import {NotaList} from './Nota-list.class.js';

const lista_notas_items = document.querySelector('#list_notes_preview_ul');
const titulo_nota = document.querySelector('#entrada');
const area_nota = document.querySelector('#area_notas');
const save_button = document.querySelector('#add');
const newNote_button = document.querySelector('#newNote');

const lista_de_notas = new NotaList();

// TODO: Cantidad maxima de letras en preview = 60;

lista_notas_items.addEventListener('click', (e) => {
	const idNota = e.target.parentElement.attributes[1].value;

	console.log(e.target.parentElement.attributes[1].value);
	titulo_nota.setAttribute('disabled', '');
	area_nota.setAttribute('disabled', '');

	const notaRecibida = lista_de_notas.buscarNota(idNota)[0];
	area_nota.value = notaRecibida.nota_contenido;
	titulo_nota.value = notaRecibida.titulo_nota;
});

const crearNotaPreview_li = (nuevaNota) => {
	let contenidoNota_preview = nuevaNota.nota_contenido;
	contenidoNota_preview =
		contenidoNota_preview.length > 60
			? contenidoNota_preview.slice(0, 60)
			: contenidoNota_preview;

	const nota_li = `
	<li class="note_item" id="${nuevaNota.id_nota}">
	<span class="title_note">${nuevaNota.titulo_nota}</span>
	<span class="content_note">
		${contenidoNota_preview}
	</span>
	</li>`;
	const div = document.createElement('div');
	div.innerHTML = nota_li;
	lista_notas_items.append(div.firstElementChild);
};

save_button.addEventListener('click', () => {
	const titulo = titulo_nota.value;
	const contenido = area_nota.value;

	if (titulo) {
		const nuevaNota = new Nota(contenido, titulo);
		lista_de_notas.agregarNota(nuevaNota);
		crearNotaPreview_li(nuevaNota);
		titulo_nota.value = '';
		area_nota.value = '';
		// console.log(lista_de_notas);
	} else {
		alert('Debes ponerle un titulo');
	}
});

newNote_button.addEventListener('click', () => {
	titulo_nota.value = '';
	area_nota.value = '';
	titulo_nota.removeAttribute('disabled', '');
	area_nota.removeAttribute('disabled', '');
});
