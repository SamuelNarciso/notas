export class NotaList {
	constructor() {
		this.notas = [];
	}
	agregarNota(notaRecibida) {
		this.notas.push(notaRecibida);
	}
	eliminarNota(id_nota) {
		this.notas = this.notas.filter((nota) => nota.id != id_nota);
	}
	buscarNota(id_nota) {
		// console.log(this.notas.filter((nota) => nota.id_nota == id_nota));

		return this.notas.filter((nota) => nota.id_nota == id_nota);
		// console.log('Id Recibido' + id_nota);

		// this.notas.forEach((nota) => {
		// 	// console.log('Id nota Actual' + nota.id_nota);
		// 	if (nota.id_nota === id_nota) {
		// 		return nota;
		// 	}
		// });
	}
}
