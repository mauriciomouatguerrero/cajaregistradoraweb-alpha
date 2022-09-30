const iva = 0.19;

function initEvents() {     
     
     
     $("#btnBack").click(function() {
	   var nv = parseInt($('#numventa').val());
	   var min = parseInt($('#minrecord').val());
	   
	   if(nv <= min)
		  QVenta(min);
	   else
	      QVenta((nv - 1));
	      
	   
	   $('#btn_save_data').prop('disabled', true);
	      
	});
	
	$("#btnNext").click(function() {
	   var nv = parseInt($('#numventa').val());
	   var max = parseInt($('#maxrecord').val());
	   
	   if(nv > max)
	      QVenta(max + 1);
	   else
	      QVenta((nv + 1));
	      
	   if(nv >= max && i > 1) {
		  $('#btn_save_data').prop('disabled', false)
	   }
	   else {
		  $('#btn_save_data').prop('disabled', true);
	   }
	});
	
	$('#btn_save_data').click(function() {
		var numventa         = $('#numventa').val();
		var fecha            = getFecha().replace('/', '-'); // $('#td_fecha').text();
		var hora             = getHora().replace(' AM', '').replace(' PM', ''); // $('#td_hora').text();
		var totalVenta       = $('#txtTotal').val();
		var totalIvaAplicado = Math.round(totalVenta * iva, 0);
		var totalCigarros    = 0; // por el momento no está abordado
        var totalPagado      = 5000; // (*)
        var totalVuelto      = totalPagado - totalVenta; // (*)
        var boletaFactura    = 'B'; // si es factura, grabar en tabla facturas
        var formaPago        = 'E'; // si es debito, llamar web service para debito
        var observaciones    = "Nueva Venta"; // $('#').val();
        
        // alert('Fecha: ' + fecha);
		// alert('Hora: ' + hora);
		 console.log('Fecha: ' + fecha);
		 console.log('Hora: ' + hora);
		 
		if(i > 1) { 
			QSave(
				numventa, fecha, hora, totalVenta, totalIvaAplicado, totalCigarros, totalPagado,
				totalVuelto, boletaFactura, formaPago, observaciones
			);
			alert('Venta Registrada con Éxito !');
			location.reload();
		}
		else {
			alert('Debe Ingresar al menos 1 Registros para Grabar');
		}
	});
	
	$('#numventa2').on('keypress', function(event, obj) {
		if(event.which == 13) {
			
           $('#numventa').val($('#numventa2').val());
           
           QVenta($('#numventa2').val());
           
           $('#numventa2').val("");
		   $('#numventa2').focus();
		}
	});
}

function whenCantidadEnter(event, obj) {
	if (event.which == 13) {
		if(obj.value != '' && obj.value > 0) {
		   calcForm(obj);
		   startVenta($('#tbl_detalle_venta'));
		   $('#btn_save_data').prop('disabled', false);
		   $('input[name="chkExcludes['+(i-2)+']"]').prop('disabled', false);
		}
		else {
		   alert('Debe especificar una cantidad mayor a 1');
		   obj.setFocus();
		}
	}
}

function whenCodigoEnter(event, obj) {
	if (event.which == 13) {
		if(obj.value != "") {
		   QArticulo(obj);
		}
        else {
	       alert('Debe ingresar/pistolear el Código del Artículo.  Ej: 0435243976413 ');
        }
	}
}

