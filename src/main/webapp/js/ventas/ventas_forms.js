function resetTabla(curIndex) {
	$("input[name='txtCodigo["+ curIndex +"]']").prop('readonly', null);
    $("input[name='txtCodigo["+ curIndex +"]']").val("");
    $("input[name='txtCantidad["+ curIndex +"]']").val("");	
    $("input[name='txtDescripcion["+ curIndex +"]']").prop('readonly', null);
    $("input[name='txtDescripcion["+ curIndex +"]']").val("");	       
    $("input[name='txtPrecio["+ curIndex +"]']").prop('readonly', null);
    $("input[name='txtPrecio["+ curIndex +"]']").val(0);
    $("input[name='txtSubtotal["+ curIndex +"]']").prop('readonly', null);
    $("input[name='txtSubtotal["+ curIndex +"]']").val(0);
         
    $("input[name='txtCodigo[" + curIndex + "]']").focus();
}

function aplicarReglas(index) {
	// evitar alfanuméricos
	$("input[name='txtCodigo[" + index + "]']").on('input', function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	});
	$("input[name='txtCantidad[" + index + "]']").on('input', function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	});
	$("input[name='txtPrecio[" + index + "]']").on('input', function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	});
	$("input[name='txtSubtotal[" + index + "]']").on('input', function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	});

	// restringir largo
	// $("input[name='txtCodigo["+ i +"]']").prop('max', 13);

}