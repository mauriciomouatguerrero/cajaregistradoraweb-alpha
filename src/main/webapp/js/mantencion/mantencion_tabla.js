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
		       '   <td>' +
		       '      <a href="javascript:;;">'+
		       '        <img src="img/edit_icon.png" style="width:20px;height:20px;" />' +
		       '      </a>' +
		       '   </td>' +
		       '   <td>' +
		       '      <a href="javascript:;;">' +
		       '        <img src="img/delete_icon.jpg" style="width:20px;height:20px;" />' +
		       '      </a>' +
		       '   </td>' +
		       '</tr>';	
		 
   });
   
   $('#tbl_articulos').append(str);  
}

function init_events() {
	$("#txtCodigo").on('keypress', function(event) {
		
		
		if(event.which == 13) {
		   var codigo        = $("#txtCodigo").val();
		   var availableArts = new Array();
		   
		   var cont = 0;
		   $.each(PGList, function(i, item) {	
						 
			  if(codigo == item.codigo) {
				 availableArts.push(
			        {
				       'codigo'      : item.codigo,
				       'descripcion' : item.descripcion,
				       'precio'      : item.precio,
			        }
		         );
		         cont++;
			  }
		   });
		   
		   if(codigo != '')
			  if(cont > 0)
			     buildTabla(availableArts);
			  else
			     alert('Artículo NO Encontrado');
		   else
		      buildTabla(PGList);
		}
	});
	
	
	$( "#txtDescripcion" ).autocomplete({
	        source: PGList,
	        select: function(event, ui){
		         var availableArts = new Array();
		         $.each(PGList, function(i, item) {
			         if(item.descripcion == ui.item.descripcion) {
				        // console.log('PRODUCTO ENCONTRADO: ' + item.descripcion);
				        availableArts.push(
					        {
						       'codigo'      : item.codigo,
						       'descripcion' : item.descripcion,
						       'precio'      : item.precio,
					        }
				        );
			         }
		         });	         
		         buildTabla(availableArts);
	        },
	}); 
	
	$( "#txtDescripcion" ).on('keypress', function(event) {
		   if(event.which == 13) {
			  if($(this).val() == '')
			     buildTabla(PGList);
			     
		   }
	});
}