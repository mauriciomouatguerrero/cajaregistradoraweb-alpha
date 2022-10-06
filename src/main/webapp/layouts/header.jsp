<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %> 

  <div id="header">
	   <div class="subrayar titulo"><b>CAJA REGISTRADORA WEB</b> - [Alpha 0.1]</div>
	   <div class="ul-menu">
	   <ul>
	     <li class="<s:property value="cur_m1"/>"><a href="Home">INICIO</a></li>
	     <li class="<s:property value="cur_m2"/>"><a href="Usuarios">ACCESOS / USUARIOS</a></li>
	     <li class="<s:property value="cur_m6"/>"><a href="Cuadratura">CUADRAR CAJA</a></li>
	     <li class="<s:property value="cur_m3"/>"><a href="Ventas">VENTAS</a></li>
	     <li class="<s:property value="cur_m4"/>"><a href="Mantencion">MANTENCIÓN</a></li>
	     <li class="<s:property value="cur_m5"/>"><a href="Reportes">REPORTES/INFORMES</a></li>
<%-- 	 <li class="<s:property value="cur_m6"/>"><a href="/">CERRAR SESIÓN</a></li> --%>
	   </ul>
	   </div>
   </div>