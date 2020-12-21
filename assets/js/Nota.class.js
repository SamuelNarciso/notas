export class Nota {
	constructor(titulo_nota, contenido_nota, color_fondo, color_letra) {
		(this.data = {
			titulo_nota,
			contenido_nota,
			fecha_nota: this.obtenerFecha(),
		}),
			(this.propiedades = {
				color_fondo,
				color_letra,
				id_nota: new Date().getTime(),
			});
	}

	obtenerFecha() {
		return `${new Date().getDate()}-${
			new Date().getMonth() + 1
		}-${new Date().getFullYear()} `;
	}
}
