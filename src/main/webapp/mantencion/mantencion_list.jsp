<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<%! String item_cat = "", item_art; %>
<%
    if(request.getParameter("item").equals("art")) {
       item_cat = "";
       item_art = "current";
    }
    else {
       item_cat = "current";
       item_art = "";
    }
%>
    
            <table style="height:160px;">
              <tr>
                 <td width="15%" style="border-right:2px solid #999999;" valign="top">
                   <ul style="margin:0px 0px;padding:0px 0px;">
                     <li style="margin-bottom:10px;width:80px;" class="<%=item_cat%>">
                        <a href="?item=cat" style="width:80px;">CATEGORIAS</a>
                     </li>
                     <li style="width:80px;" class="<%=item_art%>">
                        <a href="?item=art" style="width:80px;">ARTICULOS</a>
                     </li>
                   </ul>
                 </td>
                 <td width="85%" align="left" valign="top" style="padding:10px;">
                    <%
                       if(request.getParameter("item").equals("art")) {
                    %>
                        <jsp:include page="articulos/articulos_list.jsp" />
                    <%          }
                       else {
                    %>
                        <jsp:include page="categorias/categorias_list.jsp" />  
                    <% } %>
                 </td>
              </tr>
            </table>