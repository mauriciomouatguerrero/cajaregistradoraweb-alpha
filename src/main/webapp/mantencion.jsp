<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>CAJAREGISTRADORA01WEB - MANTENCIÓN</title>
   
   <link rel="stylesheet" type="text/css" href="css/index.css" media="screen" />
   <script type="text/javascript" src="js/jquery/jquery-3.6.0.min.js"></script>
   <script type="text/javascript" src="js/utils/reloj.js"></script>
   <script type="text/javascript" src="js/utils/format.js"></script>
   <script type="text/javascript" src="js/index.js"></script>
   <script type="text/javascript" src="js/mantencion/mantencion.js"></script>
   <script type="text/javascript" src="js/mantencion/mantencion_ajax.js"></script>   
<%--    <script type="text/javascript" src="js/ventas_events.js"></script> --%>
<%--    <script type="text/javascript" src="js/ventas_ajax.js"></script> --%>
<%--    <script type="text/javascript" src="js/ventas_forms.js"></script> --%>
<%--    <script type="text/javascript" src="js/ventas_logic.js"></script>  --%>
</head>
<body>
 
 <div id="page" class="fuente">
 
   <jsp:include page="layouts/reloj.jsp" />
   <jsp:include page="layouts/header.jsp" />
   
   <div id="content">
      <table style="width:85.5%;height:auto;position:relative;margin:0 auto;">
      <tr>
         <td>
           <jsp:include page="mantencion/mantencion_list.jsp" />
         </td>
      </tr>
      <tr>
        <td>
          <jsp:include page="layouts/footer.jsp" />
        </td>
      </tr>
      </table>
   </div>
   <!-- FIN - CONTENT -->
 </div>  
</body>
</html>