package com.cajaregistradora.struts6.actions;


import java.io.PrintWriter;
import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONArray;
import org.json.JSONObject;

import com.cajaregistradora.struts6.bo.VentasBO;
import com.cajaregistradora.struts6.bo.VentasDetalleBO;
import com.cajaregistradora.struts6.dao.ArticuloDAO;
import com.cajaregistradora.struts6.dao.VentasDAO;
import com.cajaregistradora.struts6.models.Venta;
import com.cajaregistradora.struts6.models.VentaDetalle;
import com.opensymphony.xwork2.ActionSupport;


public class VentasAction extends ActionSupport implements Serializable {
	private static final long serialVersionUID = -4751712298560353609L;
	
	
	private Venta venta;
	
	private String cur_m1;
	private String cur_m2;
	private String cur_m3;
	private String cur_m4;
	private String cur_m5;
	private String cur_m6;
	
	public VentasAction() {
		this.cur_m1 = "";
		this.cur_m2 = "";
		this.cur_m3 = "current";
		this.cur_m4 = "";
		this.cur_m5 = "";
		this.cur_m6 = "";

	}

	@Override
	public String execute() throws ServletException {
		 
    	 return SUCCESS;
    }

	
    public void getRange() throws Exception {
		
        VentasDAO ventasDAO = new VentasDAO();
        Long v1 = ventasDAO.getVentaFirstElement();
        Long v2 = ventasDAO.getVentaLastElement();
		
	    HttpServletResponse response = ServletActionContext.getResponse();
	    response.setContentType("text/plain;charset=utf-8");
	    
//	    System.out.println("AJAX - GET FIRST ID: " + v1);
//	    System.out.println("AJAX - GET LAST ID: " + v2);
	    
	    JSONObject jsonO = new JSONObject();
	    jsonO.put("idfirst", v1);
	    jsonO.put("idlast", v2);
	    
	    PrintWriter pw = response.getWriter();    	
	    pw.println(jsonO.toString());
	    pw.flush();	
	}
	
	public void getForm() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
        Long numventa = Long.parseLong(request.getParameter("venta"));
		
        // Objeto VENTAS
		VentasBO ventasBO = new VentasBO();
		Venta v = ventasBO.getHeader(numventa);
		
		// Listado DETALLE VENTAS
		List<VentaDetalle> lst = new ArrayList<VentaDetalle>();
		List<String> arts = new ArrayList<String>();
		
		lst = ventasBO.getDetalle(numventa);
		for(int i=0;i < lst.size();i++) {
			 arts.add(
					 new ArticuloDAO()
					 .getArticuloByCodigo(
					 	lst.get(i).getCodigo()
					 )
					 .getDescripcion()
		     );
		}
		
		// EMPAQUE
		JSONObject jsonO = new JSONObject();
	    jsonO.put("header", new JSONObject(v));
	    jsonO.put("detalle", lst);
	    jsonO.put("articulos", arts);
	    jsonO.put("max", ventasBO.getMaxRecord());
	    jsonO.put("min", ventasBO.getMinRecord());
	    
	    System.out.println("Object: " + jsonO.get("header"));
	    System.out.println("List: " + jsonO.get("detalle"));
	    System.out.println("Arts: " + jsonO.get("articulos"));
	    
	    // SALIDA JSON
		HttpServletResponse response = ServletActionContext.getResponse();
	    response.setContentType("text/plain;charset=utf-8");
	    PrintWriter pw = response.getWriter();    	
	    pw.println(jsonO);
	    pw.flush();	
	}
	
	public void save() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		
		Long numventa         = Long.parseLong(request.getParameter("venta"));
        
        Date fecha            = Date.valueOf(LocalDate.now()); // Date.valueOf(request.getParameter("fecha"));
        Timestamp hora        = Timestamp.valueOf(LocalDateTime.now(ZoneId.of("UTC-03:00"))); // Timestamp.valueOf(request.getParameter("fecha") + " " + request.getParameter("hora")); 
        
        Long totalVenta       = Long.parseLong(request.getParameter("totalVenta"));
        Long totalIvaAplicado = Long.parseLong(request.getParameter("totalIvaAplicado"));
        Long totalCigarros    = Long.parseLong(request.getParameter("totalCigarros"));
        Long totalPagado      = Long.parseLong(request.getParameter("totalPagado")); /* (*) */
        Long totalVuelto      = Long.parseLong(request.getParameter("totalPagado")); /* (*) */
        char boletaFactura    = (char) request.getParameter("boletaFactura").charAt(0);
        char formaPago        = (char) request.getParameter("formaPago").charAt(0);
        String observaciones  = request.getParameter("observaciones");
        
        String[] codigos  = request.getParameterValues("codigos");
        String[] cantidades = request.getParameterValues("cantidades");
        String[] precios   = request.getParameterValues("precios");
        String[] subtotales = request.getParameterValues("subtotales");
        
        JSONObject jsonO = new JSONObject();
        
        Venta v = null;
        
        VentasBO ventasBO = new VentasBO();
        v = ventasBO.save(
        		new Venta(
         	      numventa, fecha, hora, totalVenta, totalIvaAplicado, totalCigarros, 
         	      totalPagado, totalVuelto, boletaFactura, formaPago, observaciones
                )
        );
        
//        System.out.println("OUTPUT VENTA: " + new JSONObject(v));        
 
         JSONArray jsonA = new JSONArray();
         //if(v != null) {        	
            VentasDetalleBO ventasDetalleBO = new VentasDetalleBO();
            jsonA.put(ventasDetalleBO.save(numventa, codigos, cantidades, precios, subtotales));
         //}
        
//	      v = new Venta(
//		      numventa, fecha, hora, totalVenta, totalIvaAplicado, totalCigarros, 
//		      totalPagado, totalVuelto, boletaFactura, formaPago, observaciones
//	      );  
         
        jsonO.put("ventaO", new JSONObject(v));
        jsonO.put("detalleO", jsonA);
        
        System.out.println("HEADER VENTA: " + jsonO.get("ventaO"));
        System.out.println("HEADER DETALLE: " + jsonO.get("detalleO"));        
        
        // SALIDA JSON
 		HttpServletResponse response = ServletActionContext.getResponse();
 	    response.setContentType("text/plain;charset=utf-8");
 	    PrintWriter pw = response.getWriter();    	
 	    pw.println(jsonO);
 	    pw.flush();	
	}
	
	public String getCur_m1() {
		return cur_m1;
	}

	public String getCur_m2() {
		return cur_m2;
	}

	public String getCur_m3() {
		return cur_m3;
	}

	public String getCur_m4() {
		return cur_m4;
	}

	public String getCur_m5() {
		return cur_m5;
	}

	public String getCur_m6() {
		return cur_m6;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}
    
}
