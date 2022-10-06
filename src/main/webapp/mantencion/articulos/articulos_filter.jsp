<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
                
                <style type="text/css">
	             .tbl_articulos_buttons {
	                border-bottom:0px solid #FFFF00;
	                padding: 5px 0px;
	                height: 20px;
	                width:100%;
	             }
	             .tbl_articulos_buttons img {
	                float:right;
	                border:0px solid #FF0000;
	             }
	            </style>
            
                <table class="tbl_articulos_buttons">
                    <tr>
                       <td colspan="5">
                          <a href="javascript:void(0);">
                            <img src="img/add_icon.png" width="25px" height="25px">
                          </a>                          
                       </td>
                    </tr>
                    
                    <tr>
					  <td colspan="5" align="left" style="border-bottom:0px solid #999999;padding-top:5px;padding-bottom:20px;">
					     <div style="float:left;">
                             <label for="txtCodigo">Código: </label>
                             <input type="text" id="txtCodigo" placeholder="Ej: 7802820600100" size="16" /> &nbsp;&nbsp;
                         </div>    
					     <div style="float:left;">
					         <label for="txtDescripción">Descripción : </label>
					         <input type="text" id="txtDescripcion" placeholder="Ej: agua mineral" size="67" />
					     </div>

					  </td>
					</tr> 
                </table>