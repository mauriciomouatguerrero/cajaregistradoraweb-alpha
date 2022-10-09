var PGTotalPages  = 0;
var PGCurrentPage = 0;
var PGInitialPage = 0;



function buildTabla(lista) {
   var str = null;
   
   $('#tbl_articulos').empty();
   str = '<tr>' +
		 '   <th width="15%" align="left">CODIGO</th>' +
		 '   <th width="50%" align="left">DESCRIPCIÓN</th>' +
		 '   <th width="12%" align="left">PRECIO</th>' +
		 '   <th width="5%" align="left">&nbsp;</th>' +  
		 '   <th width="5%" align="left">&nbsp;</th>' +
		 '</tr>'; 		
		 	    
   $.each(lista, function(i, item) {
		str += '<tr>' +
		       '   <td>' + item.codigo + '</td>' +
		       '   <td>' + item.descripcion + '</td>' +
		       '   <td>' + item.precio + '</td>' +
		       '   <td align="center">' +
		       '      <a href="javascript:;;" onclick="QUpdate('+item.codigo+',\''+ item.descripcion +'\', '+ item.precio +');">'+ 
		       '        <img src="img/edit_icon.png" style="width:20px;height:20px;" />' +
		       '      </a>' +
		       '   </td>' +
		       '   <td align="center">' +
		       '      <a href="javascript:;;" onclick="QDelete('+item.codigo+');">' +
		       '        <img src="img/delete_icon.jpg" style="width:20px;height:20px;" />' +
		       '      </a>' +
		       '   </td>' +
		       '</tr>';	
		 
   });
   
   $('#tbl_articulos').append(str);  
}

