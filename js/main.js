/*
 * Diego Almirón
 * localStorage con jQuery
 *

$(function() {
	/*
	 * Guardar los datos en local storage
	 * y obtenerlos
	 *
	var save = $('#save'); // document.getElementById('save'),
		nombre = $('#nombre'); // document.getElementById('nombre'),
		direccion = $('#direccion'); // document.getElementById('direccion'),
		email = $('#email'); // document.getElementById('email');

	$(save).click(function() {
		localStorage.setItem('nombre', nombre.val()); // nombre.value
		localStorage.setItem('direccion', direccion.val()); // direccion.value
		localStorage.setItem('email', email.val()); // email.value
	});

	if (localStorage.getItem('nombre')) {
		var nombreg = $('#nombreg'); // document.getElementById('nombreg'),
			direcciong = $('#direcciong'); // document.getElementById('direcciong'),
			emailg = $('#emailg'); // document.getElementById('emailg');

		$(nombreg).val(localStorage.getItem('nombre'));
		$(direcciong).val(localStorage.getItem('direccion'));
		$(emailg).val(localStorage.getItem('email'));
	};

	/*
	 * Editar los datos existentes
	 *
	var edit =  $('#edit'); // document.getElementById('edit'),
		nombreg = $('#nombreg'); // document.getElementById('nombreg'),
		direcciong = $('#direcciong'); // document.getElementById('direcciong'),
		emailg = $('#emailg'); // document.getElementById('emailg');

	$(edit).click(function() {
		localStorage.setItem('nombre', nombreg.val()); // nombreg.value
		localStorage.setItem('direccion', direcciong.val()); // direcciong.value
		localStorage.setItem('email', emailg.val()); // emailg.value
		window.alert("Se han editados los datos del localStorage.");
	});

	/*
	 * Eliminar
	 *
	 var borrar = document.getElementById('borrar');

	 $(borrar).click(function() {
	 	localStorage.clear();
	 	window.alert("Se eliminaron los datos del localStorage.");
	 });
}); */

/*
 * Diego Almirón
 * localStorage con jQuery (POO)
 */

$(function() {
	/*
	 * Objeto persona
	 */
	function Persona(nombre, direccion, email) {
		$this.nombre = nombre;
		$this.direccion = direccion;
		$this.email = email;

		$this.guardar = function() {
			localStorage.setItem('nombre', $this.nombre.val());
			localStorage.setItem('direccion', $this.direccion.val());
			localStorage.setItem('email', $this.email.val());
			return console.log('persona guardada');
		}
	}

	var save = $('#save');
	$(save).click(function() {
		var p = new Persona($('#nombre'), $('#direccion'), $('#email'));
		p.guardar();
	});
});
