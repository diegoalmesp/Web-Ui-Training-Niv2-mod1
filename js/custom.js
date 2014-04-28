$(function() {
	/*
	 * Guardar los datos en local storage
	 * y obtenerlos
	 */
	var save = document.getElementById('save'),
		nombre = document.getElementById('nombre'),
		direccion = document.getElementById('direccion'),
		email = document.getElementById('email');

	$(save).click(function() {
		localStorage.setItem('nombre', nombre.value);
		localStorage.setItem('direccion', direccion.value);
		localStorage.setItem('email', email.value);
	});

	if (localStorage.getItem('nombre')) {
		var nombreg = document.getElementById('nombreg'),
			direcciong = document.getElementById('direcciong'),
			emailg = document.getElementById('emailg');

		$(nombreg).val(localStorage.getItem('nombre'));
		$(direcciong).val(localStorage.getItem('direccion'));
		$(emailg).val(localStorage.getItem('email'));
	};

	/*
	 * Editar los datos existentes
	 */
	var edit = document.getElementById('edit'),
		nombreg = document.getElementById('nombreg'),
		direcciong = document.getElementById('direcciong'),
		emailg = document.getElementById('emailg');

	$(edit).click(function() {
		localStorage.setItem('nombre', nombreg.value);
		localStorage.setItem('direccion', direcciong.value);
		localStorage.setItem('email', emailg.value);
		window.alert("Se han editados los datos del localStorage.");
	});

	/*
	 * Eliminar
	 */
	 var borrar = document.getElementById('borrar');

	 $(borrar).click(function() {
	 	localStorage.clear();
	 	window.alert("Se eliminaron los datos del localStorage.");
	 });
});