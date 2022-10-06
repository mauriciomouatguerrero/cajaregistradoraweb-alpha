<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>CAJAREGISTRADORAWEB-BETA - INDEX</title>
</head>

<script type="text/javascript" src="js/jquery/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/utils/reloj.js"></script>

<body>
 <div style="text-align:center;">
    <h1 style="text-align::center;text-decoration:underline;">
      CAJAREGISTRADORAWEB - ALPHA
    </h1>
    <h1>
        <span>
		    <span id="weekDay" class="weekDay"></span>, 
		    <span id="day" class="day"></span> de
		    <span id="month" class="month"></span> del
		    <span id="year" class="year"></span>
		</span>
		 - 
		<span>
		    <span id="hours" class="hours"></span> :
		    <span id="minutes" class="minutes"></span> :
		    <span id="seconds" class="seconds"></span>
		</span>
    </h1>
    
 </div>
 
  <div align="center">
     <img src="img/cajaregistradora-1.jpg" width="260px" height="240px">
  </div>
  <h1 style="text-align:center;">
    <a href="<%=request.getContextPath()%>/Home">INGRESAR</a> | 
    <a href="javascript:void(0);">RESPALDO</a>
  </h1>
  
</body>
</html>