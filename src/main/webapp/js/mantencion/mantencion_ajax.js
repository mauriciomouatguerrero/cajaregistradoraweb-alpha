function agregar() {
	alert('agregar');
}

function buscar() {
	$.ajax({
		type: 'POST',
		url : 'Articulo/getArticulos',
		data: {
			'codigo' : 0
		},
		success: function(json) {
			var data = $.parseJSON(json);
			// $('#tbl_articulos').append(json);
			console.log('data: ' + data);
		},
	});
}