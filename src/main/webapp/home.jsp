<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>CAJAREGISTRADORA01WEB - HOME</title>
   
   <link rel="stylesheet" type="text/css" href="css/index.css" media="screen" />
   
   <script type="text/javascript" src="js/jquery/jquery-3.6.0.min.js"></script>
   <script type="text/javascript" src="js/index.js"></script>
   <script type="text/javascript" src="js/utils/reloj.js"></script>   
</head>
<body>
 
 
 <div id="page" class="fuente">
   <jsp:include page="layouts/reloj.jsp" />
   <jsp:include page="layouts/header.jsp" />
   
   <!-- INICIO -->
   <div id="content">
      <table border="1" style="width:85.5%;height:auto;position:relative;margin:0 auto;">
      <tr>
          <td align="center" valign="top">
             <img src="img/cajaregistradora-1.jpg" width="260px" height="240px">
          </td>
      </tr>
      </table>
   </div>
   <!-- FIN -->
   
   <jsp:include page="layouts/footer.jsp" />
 </div>  
</body>
</html>