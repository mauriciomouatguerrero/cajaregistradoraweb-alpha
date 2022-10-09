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
		   
		   resetSelected();   
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
			  
			  resetSelected();     
		   }
	});
	
	init_filter_alpha();
}



function init_filter_alpha() {
	$("#a").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').addClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	   
	});
	
	$("#b").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').addClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#c").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').addClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#d").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').addClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#e").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').addClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#f").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').addClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#g").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').addClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#h").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').addClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#i").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').addClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#j").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').addClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#k").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').addClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#l").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').addClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#m").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').addClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#n").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').addClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#o").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').addClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#p").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').addClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#q").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').addClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#r").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').addClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#s").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').addClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#t").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').addClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#u").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').addClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#v").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').addClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#w").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').addClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#x").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').addClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#y").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').addClass("selected");
	   $('#z').removeClass("selected");
	});
	
	$("#z").click(function() {
	   QArticuloAlpha(this.id);
	   $('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').addClass("selected");
	});
}

function resetSelected() {
	$('#a').removeClass("selected");
	   $('#b').removeClass("selected");
	   $('#c').removeClass("selected");
	   $('#d').removeClass("selected");
	   $('#e').removeClass("selected");
	   $('#f').removeClass("selected");
	   $('#g').removeClass("selected");
	   $('#h').removeClass("selected");
	   $('#i').removeClass("selected");
	   $('#j').removeClass("selected");
	   $('#k').removeClass("selected");
	   $('#l').removeClass("selected");
	   $('#m').removeClass("selected");
	   $('#n').removeClass("selected");
	   $('#o').removeClass("selected");
	   $('#p').removeClass("selected");
	   $('#q').removeClass("selected");
	   $('#r').removeClass("selected");
	   $('#s').removeClass("selected");
	   $('#t').removeClass("selected");
	   $('#u').removeClass("selected");
	   $('#v').removeClass("selected");
	   $('#w').removeClass("selected");
	   $('#x').removeClass("selected");
	   $('#y').removeClass("selected");
	   $('#z').removeClass("selected");
}