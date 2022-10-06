function QVenta(venta) {
	// $('#content').html('<div class="loading"><img src="img/loader.gif" alt="loading" /><br/>Un momento, por favor...</div>');
	$.ajax( 
	  {
		type: 'POST',
		url: 'Ventas/buildForm',
		data: { 'venta' : venta },
		beforeSend : function(xhr) {
//			   $('#content').append('cargando...');
		},
		success : function(json) {
			        var data  = $.parseJSON(json);
				    var tabla = $('#tbl_detalle_venta');
                    var total = 0;
//                    $('#content').empty();
                    
				    $('#td_fecha').empty();
				    $('#td_hora').empty();
				    tabla.empty();
				    
				    console.log("HEADER [OBJ]: " + data.header);
				    console.log("DETALLE [LIST]: " + data.detalle); 
				    console.log("MAX RECORD: " + data.max); 
				    console.log("MIN RECORD: " + data.min);                   
					
					buildVentaHeader(tabla, data.max, data.min);
				    $.each(data.detalle, function(i, item) {
					      // console.log("DETALLE: " + item.id + " - " + item.venta + " - " + item.codigo);
					    
					      buildVentaDetalle(
						    tabla,
						    i,
						    item.codigo,
						    item.cantidad,
						    data.articulos[i],
						    item.precio,
						    item.total 
						  );
						  total += item.total;
				    });
				    
				    var fecha = null;
				    var hora  = null;
				    
				    if(typeof data.header.fecha !== 'undefined') {
					   fecha = getFechaLocal(data.header.fecha);
					   hora  = getHoraLocal(data.header.hora);
					   	
					   $('#numventa').val(data.header.venta);
				       $('#td_fecha').append(fecha);
			           $('#td_hora').append(hora);
				    				   
				    }
				    else {
					   $('#h_td_fecha').val(new Date());
					   $('#h_td_hora').val(new Date().getTime());
					   
					   fecha = getFecha();
					   hora  = getHora();
					   
					   $('#td_fecha').append(fecha);
			           $('#td_hora').append(hora);
			           
			           startVenta(tabla);		           
			           
				    }

                    if(data.header.venta > 0)
				       $('#numventa').val(data.header.venta);
				    else
				       $('#numventa').val((data.max + 1));
				    
				    
				       
				    $('#txtTotal').val(total);
				    $('#txtTotal').prop('readonly', 'yes');

		}
	  });
}


function QSave(numventa, fecha, hora, totalVenta, totalIvaAplicado, totalCigarros,
               totalPagado, totalVuelto, boletaFactura, formaPago, observaciones) {

var arr_codigos    = new Array();
var arr_cantidades = new Array();
var arr_precios    = new Array();
var arr_subtotales = new Array();
 
for(j = 0;j < i;j++) {
	arr_codigos.push($('input[name="txtCodigo['+ j +']"]').val());
	arr_cantidades.push($('input[name="txtCantidad['+ j +']"]').val());
	arr_precios.push($('input[name="txtPrecio['+ j +']"]').val());
	arr_subtotales.push($('input[name="txtSubtotal['+ j +']"]').val());
}

console.log("LARGO: " + arr_codigos.length);
console.log("ELEMENTOS: " + i);

//	
//	console.log("LARGO ARRAY: " + Array.from(arr_codigos).pop());
	 
	$.ajax(
	  {
	     type : 'POST',
	     url  :	'Ventas/saveVenta',
	     data : {
		    'venta'            : numventa,
		    'fecha'            : getFechaNonLocal(fecha),
		    'hora'             : hora,
		    'totalVenta'       : totalVenta,
		    'totalIvaAplicado' : totalIvaAplicado,
		    'totalCigarros'    : totalCigarros,
		    'totalPagado'      : totalPagado,
		    'totalVuelto'      : totalVuelto,
		    'boletaFactura'    : boletaFactura,
		    'formaPago'        : formaPago,
		    'observaciones'    : observaciones,
		    'codigos'          : JSON.stringify(arr_codigos), 
		    'cantidades'       : JSON.stringify(arr_cantidades),
		    'precios'          : JSON.stringify(arr_precios),
		    'subtotales'       : JSON.stringify(arr_subtotales),
	     },
	     success: function(json) {
		      var data = $.parseJSON(json);
		      console.log("INPUTS VALUES: " + data);
		      
		      if(data.ventaO != null) {
			      console.log("OK: " + json.arrayO); 
		      }
		      else {
			     console.log("ERROR: " + data.ventaO);
		      }
		      
	     },
	  }
	);
}

function QArticulo(obj) {
	
	$.ajax(
		{
			type : 'POST',
			url  : 'Articulo/getInfo', // pero en realidad está invocando la clase Articulos (mapping struts)
			data : {
				'codigo' : obj.value
			},
			success : function(json) {
				        var data = $.parseJSON(json);
				        var parts = obj.name.split('[');
				            parts = parts[1].split(']');
				        var index = parts[0];
				        
				        if(data.descripcion != 'producto no encontrado') {     
				           $('input[name="txtDescripcion['+index+']"]').val(data.descripcion);
				           $('input[name="txtPrecio['+index+']"]').val(data.precio);
				        
				           $('input[name="txtCantidad['+index+']"]').prop('disabled', false);
				           $('input[name="txtCodigo['+index+']"]').prop('disabled', true);
				           $('input[name="txtCantidad['+index+']"]').focus();
				        }
				        else {
					       alert('Artículo ingresado NO existe. Intente nuevamente');
					       $('input[name="txtCodigo['+index+']"]').val('');
					       $('input[name="txtCantidad['+index+']"]').prop('disabled', true);
					       $('input[name="txtCodigo['+index+']"]').focus();
				        }
			},			 
		}
	);
}