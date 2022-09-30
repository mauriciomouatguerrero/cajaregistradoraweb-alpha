package com.cajaregistradora.struts6.bo;

import java.io.Serializable;
import java.util.List;

import com.cajaregistradora.struts6.dao.ArticuloDAO;
import com.cajaregistradora.struts6.dao.VentasDAO;
import com.cajaregistradora.struts6.dao.VentasDetalleDAO;
import com.cajaregistradora.struts6.models.Articulo;
import com.cajaregistradora.struts6.models.Venta;
import com.cajaregistradora.struts6.models.VentaDetalle;

/*
 * 
 * AQUI JUNTAMOS LOS DATOS CON LA APLICACION (LAS SALIDAS - OUTPUTS)
 * JUNTAMOS: se trata de consultar y generar resultados utilizando la
 * aplicación web para desplegarlas en pantalla, integrarlos al contenido 
 * estático, y poder dejarlos interactivos al usuario de manera directa
 * con la base. Aquí se encuentra toda la lógica de negocio, y de esa manera
 * trabaja sobre la base para producir resutados, que luego serán interpretados
 * mediante el web controller. 
 * 
 */
public class VentasBO implements Serializable {
	private static final long serialVersionUID = 9208548742007728652L;
	
	
    // objetos directos	
	Venta venta;
	List<VentaDetalle> lstVentaDetalle;
	Articulo articulo;
	
	// .... o cualquier objeto de presentación value object (VO)
	 
    public VentasBO() {
    	this.venta = null;
    	this.lstVentaDetalle = null;
    	this.articulo = null;
    }
    
    public Venta getHeader(Long venta) {
    	Venta v = null;
    	    	
    	try {
    		VentasDAO vd = new VentasDAO();
    		
    		this.venta = new Venta();
    		this.venta.setVenta(venta);
    		
    		
    		v = (Venta) vd.getVenta(this.venta);
    		
    		if(v == null) {
    		   v = this.venta;
    		}
    	}
    	catch(Throwable ex) {
    		v = null;
    		ex.printStackTrace();
    	}
    	
    	return v;
    }
    
    public List<VentaDetalle> getDetalle(Long venta) {
    	List<VentaDetalle> lst = null;
    	try {
    		VentasDetalleDAO vdd = new VentasDetalleDAO();
    	    lst = vdd.getVentaDetalle(venta);
    	    
    	}
    	catch(Throwable ex) {
    		lst = null;
    		ex.printStackTrace();
    	}
    	
    	return lst; 
    }
    
    public Long getMaxRecord() {
    	return new VentasDAO().getVentaLastElement();
    }
    
    public Long getMinRecord() {
    	return new VentasDAO().getVentaFirstElement();
    }
    
    public Articulo getArticulo(Long codigo) {
    	Articulo a = null;
    	
    	try {
    		ArticuloDAO ad = new ArticuloDAO();
    		a = ad.getArticuloByCodigo(codigo);
    		
    	}
    	catch(Throwable ex) {
    		a = null;
    		ex.printStackTrace();
    	}
    	return a;
    }
    
    public Venta save(Venta venta) {
    	Venta v = null;
    	
    	try {
    		VentasDAO ventasDAO = new VentasDAO();
    		
    		if(ventasDAO.save(venta) > 0)
    		   v = venta;
    		
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
    	
    	return v;
    }
}
