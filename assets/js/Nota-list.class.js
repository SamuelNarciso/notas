export class NotaList {
	constructor() {
		this.notas = [];
	}
	agregarNota(notaRecibida) {
		this.notas.push(notaRecibida);
	}
	eliminarNota(id_nota) {
		this.notas = this.notas.filter((nota) => nota.id_nota != id_nota);
	}
	buscarNota(id_nota) {
		return this.notas.filter((nota) => nota.propiedades.id_nota == id_nota);
	}
}
