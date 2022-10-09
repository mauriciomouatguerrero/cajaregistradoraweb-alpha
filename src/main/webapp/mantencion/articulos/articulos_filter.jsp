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
	             #txtDescripcion {
	                width: 400px;
	             }
	             
	             ul.parent {
				    float:left;
				    display:inline;
				    margin:0px 0px;
				    padding: 0px 0px;
				  }
				  ul li.child {
				    list-style-type:none;
					    border:1px solid #cccccc;
				    text-align:center;
				    width: 20px;
				    margin: 3px;
				    float:left;
				    cursor: pointer;
				  }
				   ul li.child:hover {
				     background-color: #777777;
				     color: #FFFFFF;
				     cursor: hand;
				   }
				   .selected {
				      background-color: #666666;
				      color: #FFFFFF;
				   }
	            </style>
            
                <table class="tbl_articulos_buttons">
                    <tr>
                       <td colspan="5">
                          <a href="javascript:void(0);" id="btn_add" title="Nuevo Artículo">
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
					         <input type="text" id="txtDescripcion" placeholder="Ej: agua mineral" size="55" />
					     </div>

					  </td>
					</tr>
					
					
					
					<tr>
					   <td colspan="5" style="text-align:left;padding:0px 0px;">
					     <ul class="parent">
					      <li id="a" class="child">A</li>
					      <li id="b" class="child">B</li>
					      <li id="c" class="child">C</li>
					      <li id="d" class="child">D</li>
					      <li id="e" class="child">E</li>
					      <li id="f" class="child">F</li>
					      <li id="g" class="child">G</li>
					      <li id="h" class="child">H</li>
					      <li id="i" class="child">I</li>
					      <li id="j" class="child">J</li>
					      <li id="k" class="child">K</li>
					      <li id="l" class="child">L</li>
					      <li id="m" class="child">M</li>
					      <li id="n" class="child">N</li>
					      <li id="o" class="child">O</li>
					      <li id="p" class="child">P</li>
					      <li id="q" class="child">Q</li>
					      <li id="r" class="child">R</li>
					      <li id="s" class="child">S</li>
					      <li id="t" class="child">T</li>
					      <li id="u" class="child">U</li>
					      <li id="v" class="child">V</li>
					      <li id="w" class="child">W</li>
					      <li id="x" class="child">X</li>
					      <li id="y" class="child">Y</li>
					      <li id="z" class="child">Z</li>
					     </ul>
					   </td>
					</tr> 
                </table>