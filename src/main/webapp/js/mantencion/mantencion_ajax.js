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

function QArticuloAlpha(letra) {
	// alert(letra);
	
	$.ajax({
		type : 'POST',
		url  : 'Articulo/getArticulosAlpha',
		data : {
			'letra' : letra,
		},
		success : function(json) {
			 var data = $.parseJSON(json);
			 
			 // console.log('LISTADO ALPHA: ' + data.lista);
			 buildTabla(data.lista);
		}, 
	});
}


function QSave(codigo, descripcion, precio) {
	$.ajax({
		type : 'POST',
		url  : 'Articulo/save',
		data : {
			'codigo'      : codigo,
			'descripcion' : descripcion,
			'precio'      : precio,
		},
		success : function(json) {
			 var data = $.parseJSON(json);
			 
			 if(data.result > 0) {
				alert('Artículo Registrado Correctamente');
				location.reload();
			 }
			 else {
				alert('NO SE PUDO GRABAR !!!');
			}
		}, 
	});
}


function QUpdate(codigo, descripcion, precio) {
	var dlgUPD = $('#dlgEditar').dialog(
    { 
	    title: 'EDITAR ARTÍCULO',
	    autoOpen: false,
	    height: 240,
	    width: 680,
	    modal: true,
	    close: function() {
		   $('#txtDlgCodigoUpd').val('');
		   $('#txtDlgDescripcionUpd').val('');
		   $('#txtDlgPrecioUpd').val('');
			
		   location.reload();
		   
		   $('#txtDlgDescripcionUpd').focus();
		   
	    },
	});
		
	dlgUPD.find("#txtDlgCodigoUpd").val(codigo).prop('disabled', true);
	dlgUPD.find("#txtDlgDescripcionUpd").val(descripcion);
	dlgUPD.find("#txtDlgPrecioUpd").val(precio);
	
	dlgUPD.dialog("open");
	
	dlgUPD.find("#txtDlgDescripcionUpd").focus();
	
	$('#btn_guardar_upd').click(function() {
		$.ajax({
			type : 'POST',
			url  : 'Articulo/saveWithPrecio',
			data : {
				'codigo'      : $("#txtDlgCodigoUpd").val(),
				'descripcion' : $("#txtDlgDescripcionUpd").val(),
				'precio'      : $("#txtDlgPrecioUpd").val(),
			},
			success : function(json) {
				 var data = $.parseJSON(json);
				 
				 if(data.result > 0) {
					alert('Artículo Actualizado Correctamente');
					location.reload();
				 }
				 else {
					alert('NO SE PUDO GRABAR !!!');
				}
			}, 
		});
	});
	
	$("#btn_cancelar_upd").click(function() {
		  $('#txtDlgCodigoUpd').val('');
		  $('#txtDlgDescripcionUpd').val('');
		  $('#txtDlgPrecioUpd').val('');
			
		  location.reload();
		  
		  $('#txtDlgDescripcionUpd').focus();
    });
	
	
//	alert(codigo + ' - ' + descripcion + ' - ' + precio);
}

// Se borrarán los artículos en las siguientes tablas:
// - articulos_precios
// - articulos 
// PREGUNTA: SI SE BORRA UN ARTÍCULO, SE DEBE BORRAR TAMBIÉN TODO EL DETALLE DE VENTA ASOCIADO AL MISMO.
// ¿ QUE SE HARÁ FINALMENTE ? ¿ COMO LO MANEJAMOS ?
function QDelete(codigo) {
	var resp = confirm('['+codigo+']\n' +
	                   '¿ Está seguro que desea borrar este registro ? ' +
	                   'Se borrarán todos los registros asociados a este artículo.');
	                   
	if(resp) {
	   alert('BORRAR: QUEDA EN ESPERA DE LA CONFIMACIÓN DEL USUARIO');
	}
}

