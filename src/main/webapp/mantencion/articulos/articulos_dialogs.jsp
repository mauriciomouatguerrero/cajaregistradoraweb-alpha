<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>                 
                 
                 <style type="text/css">
                   #dlgNuevo {
                      background-color:#DDDDDD;
                      display: none;
                   }
                   #dlgNuevo div {
/*                       background-color: #88CC66; */
                      background-color: #000000;
                      height: 10px;
                      color: #FFFFFF;
                      margin-top: 5px;
                      vertical-align: top;
                   }
                   #dlgNuevo p {
                      
                   }
                   #dlgNuevo form {
                      border: none;
                   }
                   #dlgNuevo form fieldset {
                      display: inline;
                      border: none;
                   }
                   #dlgNuevo form fieldset label {
                      width: 100px;
                      float: left;
                      text-align: right;
                      padding-right: 6px;
                   }
                   #dlgNuevo form fieldset input[type='text'] {
                   
                   }
                   #dlgNuevo form fieldset #txtDlgDescripcion {
                      width: 480px;
                   }
                   #dlgNuevo form fieldset #txtDlgPrecio {
                      text-align: right;
                   }
                   #dlgNuevo form #field_buttons {
                      float: right;
                      margin-right: 25px;
                   }
                   #dlgNuevo form #field_buttons input[type='button'] {
                      border:1px solid #666666;
                      background-color: #AAAAAA;
                      color: #000000;
                      padding: 3px 3px;
                      margin: 3px 3px;
                      cursor: pointer;
                   }
                 </style>
                 
                 <div id="dlgNuevo">
	               <form>
                     <fieldset>
	                   <label for="txtDlgCodigo">Código: </label>
	                   <input type="text" id="txtDlgCodigo" size="18" maxlength="13"> 
	                   &nbsp;&nbsp;
	                   Ej: 7802900337087 | Picking
	                 </fieldset>
	                 <fieldset>  
	                   <label for="txtDlgDescripcion">Descripción: </label>
	                   <input type="text" id="txtDlgDescripcion">
	                 </fieldset>
	                 <fieldset>
	                   <label for="txtDlgPrecio">Precio: </label>
	                   <input type="text" id="txtDlgPrecio" maxlength="6"> (CLP)
	                 </fieldset>
	                 <div id="field_buttons">
	                   <input type="button" id="btn_guardar" title="btn_guardar" role="Guardar" value="GUARDAR">
	                   <input type="button" id="btn_cancelar" title="btn_cancelar" role="Cancelar" value="CANCELAR">
	                 </div>
	               </form>
	               
	               
	               
	               
	               <p style="font-weight:bold;border-top: 1px solid #000000;padding-top:5px;font-size:12px;">
	                  [*] Faltaría agregar <b>'categorización'</b>.
	               </p>
	               <div><hr style="border-color:#FFFFFF;" /></div>
	            </div>
	            
	            
	            
	            
	            
	            
	            
	            
	            
	            
	            
	            
	            <style type="text/css">
                   #dlgEditar {
                      background-color:#DDDDDD;
                      display: none;
                   }
                   #dlgEditar div {
/*                       background-color: #88CC66; */
                      background-color: #000000;
                      height: 10px;
                      color: #FFFFFF;
                      margin-top: 5px;
                      vertical-align: top;
                   }
                   #dlgEditar p {
                      
                   }
                   #dlgEditar form {
                      border: none;
                   }
                   #dlgEditar form fieldset {
                      display: inline;
                      border: none;
                   }
                   #dlgEditar form fieldset label {
                      width: 100px;
                      float: left;
                      text-align: right;
                      padding-right: 6px;
                   }
                   #dlgEditar form fieldset input[type='text'] {
                   
                   }
                   #dlgEditar form fieldset #txtDlgDescripcionUpd {
                      width: 480px;
                   }
                   #dlgEditar form fieldset #txtDlgPrecioUpd {
                      text-align: right;
                   }
                   #dlgEditar form #field_buttons {
                      float: right;
                      margin-right: 25px;
                   }
                   #dlgEditar form #field_buttons input[type='button'] {
                      border:1px solid #666666;
                      background-color: #AAAAAA;
                      color: #000000;
                      padding: 3px 3px;
                      margin: 3px 3px;
                      cursor: pointer;
                   }
                 </style>
	            <div id="dlgEditar">
	               <form>
                     <fieldset>
	                   <label for="txtDlgCodigoUpd">Código: </label>
	                   <input type="text" id="txtDlgCodigoUpd" size="18" maxlength="13"> &nbsp;&nbsp; <b>[solo lectura]</b>
	                 </fieldset>
	                 <fieldset>  
	                   <label for="txtDlgDescripcionUpd">Descripción: </label>
	                   <input type="text" id="txtDlgDescripcionUpd">
	                 </fieldset>
	                 <fieldset>
	                   <label for="txtDlgPrecioUpd">Precio: </label>
	                   <input type="text" id="txtDlgPrecioUpd" maxlength="6"> (CLP)
	                 </fieldset>
	                 <div id="field_buttons">
	                   <input type="button" id="btn_guardar_upd" title="btn_guardar_upd" role="Guardar" value="GUARDAR">
	                   <input type="button" id="btn_cancelar_upd" title="btn_cancelar_upd" role="Cancelar" value="CANCELAR">
	                 </div>
	               </form>
	               
	               
	               
	               
	               <p style="font-weight:bold;border-top: 1px solid #000000;padding-top:5px;font-size:12px;">
	                  [*] Faltaría agregar <b>'categorización'</b>.
	               </p>
	               <div><hr style="border-color:#FFFFFF;" /></div>
	            </div>