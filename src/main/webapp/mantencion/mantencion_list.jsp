<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
            <table style="height:160px;">
              <tr>
                 <td width="15%" style="border-right:2px solid #999999;" valign="top">
                   <ul style="margin:0px 0px;padding:0px 0px;">
                     <li style="margin-bottom:10px;width:80px;"><a href="javascript:;;" style="width:80px;">CATEGORIAS</a></li>
                     <li style="width:80px;"><a href="javascript:;;" style="width:80px;">ARTICULOS</a></li>
                   </ul>
                 </td>
                 <td width="85%" align="left" valign="top" style="padding:10px;">
                   
                   <jsp:include page="mantencion/categorias/categorias_list.jsp" />                  
                   
                 </td>
              </tr>
            </table>