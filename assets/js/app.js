import {Nota} from './Nota.class.js';
import {NotaList} from './Nota-list.class.js';

const lista_notas_items = document.querySelector('#list_notes_preview_ul');
const titulo_nota = document.querySelector('#entrada');
const area_nota = document.querySelector('#area_notas');
const contenedor_notas = document.querySelector('.contenedor_notas');
const save_button = document.querySelector('#add');
const newNote_button = document.querySelector('#newNote');
const elegir_color = document.querySelector('#choose-color');
const colors_pallete = document.querySelector('#colors-pallete');

const lista_de_notas = new NotaList();

const crearNotaPreview_li = (nuevaNota) => {
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
		console.log(lista_de_notas);
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

const enviarNota_areaEdicion = (e) => {
	console.log(e.target.parentElement.id);

	const idNota = e.target.parentElement.id;
	titulo_nota.setAttribute('disabled', '');
	area_nota.setAttribute('disabled', '');

	const notaRecibida = lista_de_notas.buscarNota(idNota)[0];
	area_nota.value = notaRecibida.nota_contenido;
	titulo_nota.value = notaRecibida.titulo_nota;
};

const eliminarNota = (e) => {
	const idNota = e.target.parentElement.parentElement.id;
	lista_de_notas.eliminarNota(idNota);
	lista_notas_items.removeChild(document.getElementById(idNota));
	console.log(lista_de_notas);
};

lista_notas_items.addEventListener('click', (e) => {
	console.log(e.target.classList.value);

	if (e.target.classList.value.includes('delete-icon')) {
		eliminarNota(e);
	} else if (e.target.classList.value.includes('note')) {
		enviarNota_areaEdicion(e);
	}
});

elegir_color.addEventListener('click', () => {
	colors_pallete.classList.toggle('colors-pallete');

	colors_pallete.classList.toggle('hide');

	console.log(colors_pallete.classList);
});

colors_pallete.addEventListener('click', (e) => {
	// console.log(e.target.id);
	if (e.target.id) {
		const cambiarColor_Fondo = (color) => {
			contenedor_notas.style.backgroundColor = color;
		};
		const cambiarColor_letra = (color) => {
			area_nota.style.color = color;
		};

		switch (e.target.id) {
			case 'fondo-color-blanco':
				cambiarColor_Fondo('#f1f1f1');
				cambiarColor_letra('#1a1c20');
				break;
			case 'fondo-color-naranja':
				cambiarColor_Fondo('#ff7e67');
				break;
			case 'fondo-color-azul':
				cambiarColor_Fondo('#68b0ab');
				break;
			case 'fondo-color-amarillo':
				cambiarColor_Fondo('#ffc93c');
				break;
			case 'fondo-color-rosa':
				cambiarColor_Fondo('#d789d7');
				break;
			case 'fondo-color-rojo':
				cambiarColor_Fondo('#ff4b5c');
				break;
			case 'fondo-color-verde':
				cambiarColor_Fondo('#91d18b');
				break;
			case 'letra-color-negro':
				cambiarColor_letra('#1a1c20');
				break;
			case 'letra-color-blanco':
				cambiarColor_letra('#f1f1f1');
				break;
			case 'letra-color-gris':
				cambiarColor_letra('#4c4e57');
				break;

			default:
				break;
		}
	} else {
	}
});
