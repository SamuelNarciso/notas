export class Nota {
	constructor(contenidoNota, tituloNota) {
		this.nota_contenido = contenidoNota;
		this.titulo_nota = tituloNota;
		this.id_nota = new Date().getTime();
	}
}
