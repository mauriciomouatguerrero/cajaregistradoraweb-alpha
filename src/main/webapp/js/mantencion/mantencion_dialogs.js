//var $dlgNEW = $('#dlgNuevo').dialog(
//{ 
//    autoOpen: false,
//    height: 400,
//    width: 350,
//    modal: true,
//});

function init_events_ui() {
    var dlgNEW = $('#dlgNuevo').dialog(
    { 
	    title: 'NUEVO ARTÍCULO',
	    autoOpen: false,
	    height: 240,
	    width: 680,
	    modal: true,
	    close: function() {
		   $('#txtDlgCodigo').val('');
		   $('#txtDlgDescripcion').val('');
		   $('#txtDlgPrecio').val('');
			
		   location.reload();
		   
		   $('#txtDlgCodigo').focus();
		   
	    },
    });
    
    
	    
	$('#btn_add').on('click', function() {
		dlgNEW.dialog("open");
		
		$("#btn_guardar").click(function() {
			QSave(
				$('#txtDlgCodigo').val(),
				$('#txtDlgDescripcion').val(),
				$('#txtDlgPrecio').val()
		    );
		    
		    $('#txtDlgCodigo').val('');
			$('#txtDlgDescripcion').val('');
			$('#txtDlgPrecio').val('');
			
			$('#txtDlgCodigo').focus();
		});
		
		$("#btn_cancelar").click(function() {
		  $('#txtDlgCodigo').val('');
		  $('#txtDlgDescripcion').val('');
		  $('#txtDlgPrecio').val('');
			
		  location.reload();
		  
		  $('#txtDlgCodigo').focus();
		});
	});
}
