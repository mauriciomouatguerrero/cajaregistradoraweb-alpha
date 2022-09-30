
function getFechaLocal(fecha) {
    var fecha = new Date(fecha);
	      
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
 	var ano = fecha.getFullYear();
	
	if(dia < 10 && dia >= 0)
	   dia = "0" + dia;
	
	if(mes < 10 && dia >= 0)
	   mes = "0" + mes;   

	fecha = dia + '/' + mes + "/" + ano;
	
	return fecha;
}

function getHoraLocal(fecha) {
    var parts = fecha.toString().split(' ');

	var hora  = parts[1].split('.');
	    hora  = hora[0];
	    
    var hms   = hora[0].split(':');
    
    hora = "";
    if(hms[0] > 0 && hms[0] < 10)
       hms[0] = "0" + hms[0];
       
    if(hms[1] > 0 && hms[1] < 10)
       hms[1] = "0" + hms[1];
       
    if(hms[2] > 0 && hms[2] < 10)
       hms[2] = "0" + hms[2];   
	
	hora = hms[0] + ":" + hms[1] + ":" + hms[2];
	      
	return hora;
}

function getFechaNonLocal(fecha) {
    // var fecha = new Date(fecha);
	var parts = fecha.split('/');
	      
    var dia = parts[0];
    var mes = parts[1];
 	var ano = parts[2];

//	if(dia < 10 && dia >= 0)
//	   dia = "0" + dia;
//	
//	if(mes < 10 && mes >= 0)
//	   mes = "0" + mes;   

	f = ano + '-' + mes + "-" + dia;
	
	console.log("MY DATE: " + f);
	
	return f;
}

function getHoraNonLocal(fecha) {
    var parts = fecha.toString().split(' ');

	var hora  = parts[1].split(' ');
	    hora  = hora[0];
	
	var hms   = hora[0].split(':');
    
    hora = "";
    if(hms[0] > 0 && hms[0] < 10)
       hms[0] = "0" + hms[0];
       
    if(hms[1] > 0 && hms[1] < 10)
       hms[1] = "0" + hms[1];
       
    if(hms[2] > 0 && hms[2] < 10)
       hms[2] = "0" + hms[2];   
	
	hora = hms[0] + ":" + hms[1] + ":" + hms[2];
	      
	return hora;
}

function getFecha() {
	var fecha = new Date();
	
	d = fecha.getDate();
	m = fecha.getMonth() + 1;
	a = fecha.getFullYear();
	
	if(d < 10 && d >= 0)
	   d = "0" + d;
	
	if(m < 10 && m >= 0)
	   m = "0" + m;   
	   
	fecha = d + "/" + m + "/" + a;
		
	return fecha;
}

function getHora() {
	var hora = new Date();
	
	h = hora.getUTCHours() - 3;
	m = hora.getMinutes();
	s = hora.getSeconds();
	
	var ampm = ( (h < 12) ? "AM" : "PM");
	
	if(h < 10 && h >= 0)
	   h = "0" + h;
	
	if(m < 10 && m >= 0)
	   m = "0" + m;	
	   
	if(s < 10 && s >= 0)
	   s = "0" + s;		
	
	hora = h + ":" + m + ":" + s + " " + ampm;
	return hora;
}