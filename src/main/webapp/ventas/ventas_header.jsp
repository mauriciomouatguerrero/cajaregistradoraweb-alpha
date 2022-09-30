<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s" %>
      
      <tr>
          <td valign="top">
             <table style="width:100%;margin-top:5px;">
                <tr>
                   <td colspan="5" align="right" style="padding-bottom:10px;">
                      <table style="border:0px solid #FF0000;">
                        <tr>
                           <td align="right">Fecha: <input type="hidden" id="h_td_fecha" /></td>
                           <td align="left" id="td_fecha"></td>
                        </tr>
                        <tr>
                           <td align="right">Hora: <input type="hidden" id="h_td_hora" /></td>
                           <td align="left" id="td_hora"></td>
                        </tr>
                      </table>
                   </td>
                </tr>
                <tr>
                   <td colspan="5"><hr /></td>
                </tr>
                <tr>
                   <td align="right">Nro.Venta:</td>
                   <td align="left">
                      <input type="text" id="numventa" size="13" value="" readonly />
                   </td>
                   <td width="57%" align="center">
                      <table style="width:50%;">
                      <tr>
                         <td align="center">
                            <input type="button" id="btnBack" value="Anterior" style="width:80px;"  /> 
                         </td>
                         <td align="center">
                            <input type="button" id="btnNext" value="Siguiente" style="width:80px;" /> 
                         </td>                         
                      </tr>
                      </table>
                   </td>
                   <td align="right">Buscar:</td>
                   <td align="left">
                      <input type="text" id="numventa2" size="13" value="" placeholder="Nº Venta" />
                   </td>
                <tr>
             </table>
          </td>
      </tr>