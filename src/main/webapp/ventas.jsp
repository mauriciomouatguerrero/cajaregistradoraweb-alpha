<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>CAJAREGISTRADORA01WEB - VENTAS</title>
   
   <link rel="stylesheet" type="text/css" href="css/index.css" media="screen" />
   <script type="text/javascript" src="js/jquery/jquery-3.6.0.min.js"></script>
   
   <script type="text/javascript" src="js/index.js"></script>
   
   <script type="text/javascript" src="js/utils/reloj.js"></script>
   <script type="text/javascript" src="js/utils/format.js"></script>
   
   <script type="text/javascript" src="js/ventas/ventas.js"></script>
   <script type="text/javascript" src="js/ventas/ventas_tabla.js"></script>  
   <script type="text/javascript" src="js/ventas/ventas_events.js"></script>
   <script type="text/javascript" src="js/ventas/ventas_ajax.js"></script>
   <script type="text/javascript" src="js/ventas/ventas_forms.js"></script>
   <script type="text/javascript" src="js/ventas/ventas_logic.js"></script> 
   
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
      
      <jsp:include page="ventas/ventas_header.jsp" />
      
      <jsp:include page="ventas/ventas_detalle.jsp" />
      
      <jsp:include page="ventas/ventas_detalle_total.jsp" />
      
      <tr>
         <td><hr /></td>
      </tr>
      <tr>
         <td align="right" style="padding-top:10px;">
<!--             <input type="button" id="btn_show_values" value="show values" /> -->
<!--             <input type="button" id="btn_fill_data" value="fill data" /> -->
<!--             <input type="button" id="btn_new_row" value="new row" /> -->
            <input type="submit" id="btn_save_data" value="GRABAR DATOS" />
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