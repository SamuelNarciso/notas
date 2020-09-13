export class Nota {
	constructor(contenidoNota, tituloNota) {
		this.nota_contenido = contenidoNota;
		this.titulo_nota = tituloNota;
		this.id_nota = new Date().getTime();
		this.fecha_nota = this.obtenerFecha();
		// this.color_fondo_nota = 
		// this.color_letra_nota =
	}

	obtenerFecha() {
		return `${new Date().getDate()}-${new Date().getMonth() +1}-${new Date().getFullYear()} `;
	}
}
