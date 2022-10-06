var PGList  = new Array();         // SOLO LECTURA

function QArticulos() {
	$.ajax({
		type: 'POST',
		url : 'Articulo/getArticulos',
		success: function(json) {
			var data  = $.parseJSON(json);
			
			$.each(data.lista, function(i, item) {
			  PGList.push(
				{
			       'codigo'     : item.codigo,
			       'descripcion': item.descripcion,
			       'precio'     : item.precio,
			       'value'      : item.descripcion,		
				}
			  );	
			}); 
			
			buildTabla(PGList);
						
			$('#txtCodigo').focus();
			
		},
	});
}





