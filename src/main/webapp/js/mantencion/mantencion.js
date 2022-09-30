$(document).ready(function() {
  $('#txtCodigo').focus();
  
  $('#btn_agregar').click(function() {
	agregar(); 
  });
  
  $('#btn_buscar').click(function() {
	buscar(); 
  });
	
});






//function excludeItem(obj) {
//	var parts = obj.name.split("[");
//	parts = parts[1].split("]");
//	var curIndex = parts[0];
//
//	if (confirm('¿ Desea descartar el artículo seleccionado ?')) {
//		if(curIndex > 0) {
//		   recalcForm(curIndex);
//		   $("#row_" + curIndex).remove();
//        }
//        else {
//	       console.log("NOTA: Solo se hace reset de datos, no se elimina la última fila.");
//	       $("input[name='chkExcludes["+ curIndex +"]']").prop('checked', false);
//	       
//	       resetTabla(curIndex);
//        }
//	}
//	else {
//		$("input[name='chkExcludes[" + curIndex + "]']").prop('checked', false);
//	}
//
//}









