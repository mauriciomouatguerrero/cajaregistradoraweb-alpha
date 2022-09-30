
var i = 0;
var total = 0;


$(document).ready(function() {
	QVenta(0); // EJ: 537668 - 544684
	initEvents();	
	
	$('input[name="txtCantidad['+i+']"]').prop('disabled', true);
    $('input[name="txtDescripcion['+i+']"]').prop('disabled', true);
    $('#btn_save_data').prop('disabled', true);
});






function excludeItem(obj) {
	var parts = obj.name.split("[");
	parts = parts[1].split("]");
	var curIndex = parts[0];

	if (confirm('¿ Desea descartar el artículo seleccionado ?')) {
		if(curIndex > 0) {
		   recalcForm(curIndex);
		   $("#row_" + curIndex).remove();
        }
        else {
	       console.log("NOTA: Solo se hace reset de datos, no se elimina la última fila.");
	       $("input[name='chkExcludes["+ curIndex +"]']").prop('checked', false);
	       
	       resetTabla(curIndex);
        }
	}
	else {
		$("input[name='chkExcludes[" + curIndex + "]']").prop('checked', false);
	}

}









