function calcForm(obj) {
	var cantidad = obj.value;
	var precio = $("input[name='txtPrecio[" + (i - 1) + "]']").val();
	var subtotal = precio * cantidad;

	// setting up
	$("input[name='txtPrecio[" + (i - 1) + "]']").val(precio);
	$("input[name='txtSubtotal[" + (i - 1) + "]']").val(subtotal);

	total += subtotal;

	$("#txtTotal").val(total);
	$("input[name='txtCodigo[" + i + "]']").focus();


	console.log("Total: " + total);

}

function recalcForm(curIndex) {
	var subtotal = $("input[name='txtSubtotal[" + curIndex + "]']").val();
	var lastIndex = i - 1;

	total -= subtotal;

	$("#txtTotal").val(total);

	$("input[name='txtCodigo[" + lastIndex + "]").focus();


	console.log("Total: " + total);

}