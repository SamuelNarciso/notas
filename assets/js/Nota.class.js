export class Nota {
	constructor(tituloNota, contenidoNota, color_fondo, color_letra) {
		this.nota_contenido = contenidoNota;
		this.titulo_nota = tituloNota;
		this.color_fondo = color_fondo;
		this.color_letra = color_letra;
		this.id_nota = new Date().getTime();
		this.fecha_nota = this.obtenerFecha();
		// this.color_fondo_nota =
		// this.color_letra_nota =
	}

	obtenerFecha() {
		return `${new Date().getDate()}-${
			new Date().getMonth() + 1
		}-${new Date().getFullYear()} `;
	}
}
