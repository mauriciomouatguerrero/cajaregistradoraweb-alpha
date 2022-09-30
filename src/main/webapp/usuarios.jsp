<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>CAJAREGISTRADORA01WEB - USUARIOS/ROLES</title>
   
   <link rel="stylesheet" type="text/css" href="css/index.css" media="screen" />
   <script type="text/javascript" src="js/jquery/jquery-3.6.0.min.js"></script>
   <script type="text/javascript" src="js/index.js"></script> 
   <script type="text/javascript" src="js/utils/reloj.js"></script>  
   <script type="text/javascript" src="js/ventas.js"></script>  
   <script type="text/javascript" src="js/ventas_events.js"></script>
   <script type="text/javascript" src="js/ventas_ajax.js"></script>
   <script type="text/javascript" src="js/ventas_forms.js"></script>
   <script type="text/javascript" src="js/ventas_logic.js"></script> 
</head>
<body>
 
 <div id="page" class="fuente">
   
   <jsp:include page="layouts/reloj.jsp" />
   <jsp:include page="layouts/header.jsp" />
   
   <div id="content">
      <table style="width:85.5%;height:auto;position:relative;margin:0 auto;">
      <tr>
          <td><hr /></td>
      </tr>
      
      <tr><td align="left"><h3>CAJAREGISTRADORA01WEB - USUARIOS/ROLES</h3></td></tr>
      
      <tr>
         <td><hr /></td>
      </tr>
      <tr>
         <td align="right" style="padding-top:10px;">
            <input type="button" id="btn_show_values" value="show values" />
            <input type="button" id="btn_fill_data" value="fill data" />
            <input type="button" id="btn_new_row" value="new row" />
            <input type="submit" value="GRABAR DATOS" />
         </td>
      </tr>
      </table>
   </div>
   <!-- FIN - CONTENT -->
   
   <jsp:include page="layouts/footer.jsp" />
 </div>  
</body>
</html>