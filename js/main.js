/*
 * Diego Almirón
 * localStorage con jQuery (POO)
 */

$(function() {
	/*
	 * Persona Object
	 */
	function Persona(nombre, direccion, email) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.email = email;

		/*
		 * Function: save
		 */
		this.guardar = function() {
			localStorage.setItem('nombre', this.nombre.val());
			localStorage.setItem('direccion', this.direccion.val());
			localStorage.setItem('email', this.email.val());
			return console.log('persona guardada');
		}

		/*
		 * Function: edit
		 */
		this.editar = function() {
			localStorage.setItem('nombre', this.nombre.val());
			localStorage.setItem('direccion', this.direccion.val());
			localStorage.setItem('email', this.email.val());
			window.alert("Se editaron los datos del localStorage.");
		}

		/*
		 * FUnction: delete
		 */
		this.borrar = function() {
			localStorage.clear();
	 		window.alert("Se eliminaron los datos del localStorage.");
		}
	}

	/*
	 * FUnction: display data if exists
	 */
	if (localStorage.getItem('nombre')) {
		var nombreg = $('#nombreg'); // document.getElementById('nombreg'),
			direcciong = $('#direcciong'); // document.getElementById('direcciong'),
			emailg = $('#emailg'); // document.getElementById('emailg');

		$(nombreg).val(localStorage.getItem('nombre'));
		$(direcciong).val(localStorage.getItem('direccion'));
		$(emailg).val(localStorage.getItem('email'));
	};

	/*
	 * Mouse jQuery click events: save, edit, delete
	 */

	var save = $('#save'),
		edit = $('#edit'),
		borrar = $('#borrar');

	$(save).click(function() {
		var nombre = $('#nombre'),
			direccion = $('#direccion'),
			email = $('#email');

		var p = new Persona(nombre, direccion, email);
		p.guardar();
	});

	$(edit).click(function() {
		var nombre = $('#nombreg'),
			direccion = $('#direcciong'),
			email = $('#emailg');

		var p = new Persona(nombre, direccion, email);
		p.editar();
	});

	$(borrar).click(function() {
		// var nombre = $('#nombreg'),
		// 	direccion = $('#direcciong'),
		// 	email = $('#emailg');

		var p = new Persona();
		p.borrar();
	});
});
