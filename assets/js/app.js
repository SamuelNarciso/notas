import { Nota } from './Nota.class.js';
import { NotaList } from './Nota-list.class.js';
import { crearNotaPreview_li } from './NotaNueva-html.js';
import { ver_nota_completa } from './ver_nota_completa.js';

const lista_notas_items = document.querySelector('#list_notes_preview_ul');
const area_nota_completa = document
	.querySelector('#area_nota_completa')
	.getElementsByClassName('area_principal_notas');
const titulo_nota = document.querySelector('#entrada');
const area_nota = document.querySelector('#area_notas');
const contenedor_notas = document.querySelector('.contenedor_notas');
const save_button = document.querySelector('#add');
const newNote_button = document.querySelector('#newNote');
const elegir_color = document.querySelector('#choose-color');
const colors_pallete = document.querySelector('#colors-pallete');

const lista_de_notas = new NotaList();

save_button.addEventListener('click', () => {
	const titulo = titulo_nota.value;
	const contenido = area_nota.value;
	const color_fondo = contenedor_notas.dataset.color_fondo;
	const color_letra = contenedor_notas.dataset.color_texto;

	if (titulo) {
		const nuevaNota = new Nota(titulo, contenido, color_fondo, color_letra);
		lista_de_notas.agregarNota(nuevaNota);
		crearNotaPreview_li(nuevaNota, lista_notas_items);
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

const eliminarNota = (e) => {
	const idNota = e.target.parentElement.parentElement.id;
	lista_de_notas.eliminarNota(idNota);
	lista_notas_items.removeChild(document.getElementById(idNota));
	console.log(lista_de_notas);
};

lista_notas_items.addEventListener('click', (e) => {
	// console.log(e.target.parentElement)
	// console.log(e.target.classList.value);

	if (e.target.classList.value.includes('delete-icon')) {
		eliminarNota(e);
	} else if (e.target.classList.value.includes('note')) {
		const id = e.target.parentElement.id;
		ver_nota_completa(id, lista_de_notas, area_nota_completa);
	}
});

elegir_color.addEventListener('click', () => {
	colors_pallete.classList.toggle('colors-pallete');
	colors_pallete.classList.toggle('hide');
});

colors_pallete.addEventListener('click', (e) => {
	// console.log(e.target.id);
	if (e.target.classList.value) {
		const cambiarColor_Fondo = (color) => {
			contenedor_notas.dataset.color_fondo = color;

			contenedor_notas.classList.forEach((clase) => {
				if (clase.includes('fondo-color')) {
					contenedor_notas.classList.remove(clase);
					contenedor_notas.classList.add(color);
				}
			});
		};
		const cambiarColor_letra = (color) => {
			// area_nota.style.color = color;
			contenedor_notas.dataset.color_texto = color;

			area_nota.classList.forEach((clase) => {
				if (clase.includes('letra-color')) {
					area_nota.classList.remove(clase);
					area_nota.classList.add(color);
				}
			});
			// console.log(contenedor_notas.dataset);
		};

		console.log(e.target.classList.value.includes('fondo-color'));

		switch (e.target.id) {
			case 'fondo-color-blanco':
				cambiarColor_Fondo('fondo-color-blanco');
				cambiarColor_letra('letra-color-negro');
				break;
			case 'fondo-color-naranja':
				cambiarColor_Fondo('fondo-color-naranja');
				break;
			case 'fondo-color-azul':
				cambiarColor_Fondo('fondo-color-azul');
				break;
			case 'fondo-color-amarillo':
				cambiarColor_Fondo('fondo-color-amarillo');
				break;
			case 'fondo-color-rosa':
				cambiarColor_Fondo('fondo-color-rosa');
				break;
			case 'fondo-color-rojo':
				cambiarColor_Fondo('fondo-color-rojo');
				break;
			case 'fondo-color-verde':
				cambiarColor_Fondo('fondo-color-verde');
				break;
			case 'letra-color-negro':
				cambiarColor_letra('letra-color-negro');
				break;
			case 'letra-color-blanco':
				cambiarColor_letra('letra-color-blanco');
				break;
			case 'letra-color-gris':
				cambiarColor_letra('letra-color-gris');
				break;

			default:
				break;
		}
	} else {
	}
});
