<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
            
            <style type="text/css">
             #div_tbl_articulos {
                border:1px dotted #000099;
                height:230px;
                overflow-y:auto;
             }
             #tbl_articulos {
/*                 border:1px solid #FF00AA; */
             }
             .ui-autocomplete {
	            max-height: 200px;
	            overflow-y: auto;
	            /* prevent horizontal scrollbar */
	            overflow-x: hidden;
	            /* add padding to account for vertical scrollbar */
	            padding-right: 20px;
	         } 
            </style>
            
            <div id="div_tbl_articulos">
                
                <table style="width:720px;" border="1" id="tbl_articulos">
                   <tr>
			          <th width="15%" align="left">CODIGO</th>
			          <th width="50%" align="left">DESCRIPCIÓN</th>
			          <th width="12%" align="left">PRECIO</th> 
			          <th width="5%" align="left">&nbsp;</th>  
			          <th width="5%" align="left">&nbsp;</th> 
			       </tr>
			       <tr>
                      <td align="center" colspan="5">
                        <img src="img/loader-1.gif" />
                      </td>
                   </tr>
                </table> 
                
             </div>