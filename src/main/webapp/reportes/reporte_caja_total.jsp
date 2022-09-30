<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    <style type="text/css">
     #tbl_buscador {
        width: 100%;
     }
     #tbl_buscador tr th,
     #tbl_buscador tr td {
        text-align: left;
        padding: 5px 5px;
     }
     #tbl_buscador tr td.total {
        text-align: right;
     }
     #tbl_buscador tr td.botonera {
        text-align: right;
     }
     #tbl_buscador tr td a {
        text-align: center;
        color: #990000;
        font-weight: bolder;
        font-size: 11px;
     }
     #tbl_buscador tr td a:hover {
        text-align: center;
        color: #009900;
        font-weight: bolder;
        font-size: 11px;
     }
    </style>
    <table id="tbl_buscador" border="1">
    <tr>
       <td colspan="8" style="text-align: right;">
         <a href="javascript:;;" title="Gráfico">
            <img src="img/graph_icon.png" width="20px" height="20px" />
         </a>
         <a href="javsacript:;;" title="Exportar Excel">
            <img src="img/pdf_icon.png" width="20px" height="20px" />
         </a>
         <a href="javascript:;;" title="Descargar PDF">
            <img src="img/excel_icon.png" width="20px" height="20px" />
         </a>
       </td>
    </tr>
    <tr>
       <td colspan="8" style="border:0px solid #DF0000;">
         Nº Venta: <input type="text" id="numventa" size="6" />
         |
         Fecha: <input type="text" id="fecha" size="8" value="22/12/2022" />
<!--           [OBJ CALENDAR - DATETIMEPICKER] -->
          | 
         Código: <input type="text" id="codigo" size="13" />
         | 
         Articulo: <input type="text" id="descripcion" size="47" />
       </td>
    </tr>
    <tr>
      <td colspan="8" class="botonera">
         <input type="button" id="btnBuscar" value="buscar" />
      </td>
    </tr>
    <tr>
      <td colspan="8" style="border:0px solid #00DF00;"><hr /></td>
    </tr>
    <tr style="border:1px solid #0000FF;">
       <th>Nº Venta</th>
       <th>Codigo</th>
       <th>Fecha/Hora</th>
       <th>Descripcion</th>
       <th>cantidad</th>
       <th width="80px">P.unitario</th>
       <th width="80px">Sub-Total</th>
       <th>&nbsp;</th>
    </tr>
    <tr style="border:1px solid #DF0000;">
       <td>554631</td>
       <td>0445294839234</td>
       <td>22/11/2013</td>
       <td>NECTAR DE LOS DIOSES 100mldfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd</td>
       <td>3</td>
       <td>1.500</td>
       <td>4.500</td>
       <td><a href="javascript:void(0);">detalle</a></td>
    </tr>
    <tr>
      <td colspan="8" style="border:0px solid #00DF00;"><hr /></td>
    </tr>
    <tr>
       <td colspan="7" class="total">Total : </td>
       <td><strong>$ 4.500 CLP</strong></td>
       
    </tr>
    </table>
    