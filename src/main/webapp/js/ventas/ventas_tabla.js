function buildVentaHeader(tabla, max, min) {
	tabla.append(
		'<tr>'+
        '  <th colspan="5" style="font-weight:bold;text-align:left;font-size:14px;text-decoration:underline;border-bottom:1px solid #999999;">'+
        '    <span>Detalle de Venta</span>'+
        '    <input type="hidden" id="maxrecord" value="'+ max +'" />' +
		'    <input type="hidden" id="minrecord" value="'+ min +'" />' +
        '  </th>'+
        '</tr>' +		            
		'<tr>' +
        '  <th align="left" style="padding-top:5px;">Código</th>' +
        '  <th align="left" style="padding-top:5px;">Cant.</th>' +
        '  <th align="left" style="padding-top:5px;">Descripción</th>' +
        '  <th align="left" style="padding-top:5px;">Precio</th>' +
        '  <th align="left" style="padding-top:5px;">Sub-Total</th>' +
        '</tr>'
	);
}

function startVenta(tabla) {
	tabla.append(
		'<tr id="row_' + i + '">' +
		'   <td align="left">' +
		'      <input type="text" id="txtCodigo" name="txtCodigo[' + i + ']" onkeypress="return whenCodigoEnter(event, this);" size="17" maxlength="13"  />' +
		'   </td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtCantidad" name="txtCantidad[' + i + ']" onkeypress="return whenCantidadEnter(event, this);" size="1" maxlength="3" disabled="true" />' +
		'   </td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtDescripcion" name="txtDescripcion[' + i + ']" size="81" disabled="true" disabled="true"  />' +
		'</td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtPrecio" name="txtPrecio[' + i + ']" size="7" disabled="true" />' +
		'   </td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtSubtotal" name="txtSubtotal[' + i + ']" size="7" disabled="true" />' +
		'      <input type="checkbox" name="chkExcludes[' + i + ']" onclick="excludeItem(this);" disabled="true" />' +
		'   </td>' +
		'</tr>'
	);

	aplicarReglas(i);
	
	$("input[name='txtPrecio[" + i + "]']").val(0);
	$("input[name='txtSubtotal[" + i + "]']").val(0);
	$("#txtTotal").prop('disabled', true);
	$("input[name='txtCodigo[" + i + "]']").focus();

	i++;
}

function buildVentaDetalle(tabla, index, codigo, cantidad, descripcion, precio, total) {
	
	tabla.append(
		'<tr id="row_' + index + '">' + 
		'   <td align="left">' + 
		'      <input type="text" id="txtCodigo" name="txtCodigo[' + index + ']" value="'+ codigo +'" size="17" maxlength="13" readonly="yes" />' +
		'   </td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtCantidad" name="txtCantidad[' + index + ']" value="'+ cantidad +'" size="1" maxlength="3" readonly="yes" />' +
		'   </td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtDescripcion" name="txtDescripcion[' + index + ']" value="'+ descripcion +'" size="81" readonly="yes" />' +
		'</td>' +
		'   <td align="left">' +
		'      <input type="text" id="txtPrecio" name="txtPrecio[' + index + ']" value="'+ precio +'" size="7" readonly="yes" />' +
		'   </td>' + 
		'   <td align="left">' +
		'      <input type="text" id="txtSubtotal" name="txtSubtotal[' + index + ']" value="'+ total +'" size="7" readonly="yes" />' +
		'   </td>' + 
		'</tr>' 
	);
	
}