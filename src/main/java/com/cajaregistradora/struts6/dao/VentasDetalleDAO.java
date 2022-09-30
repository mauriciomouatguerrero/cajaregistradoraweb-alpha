package com.cajaregistradora.struts6.dao;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.cajaregistradora.struts6.models.VentaDetalle;

import org.hibernate.Session;

import java.util.List;

import javax.persistence.Query;

public class VentasDetalleDAO {
    Session session;
	
	VentaDetalle ventaDetalle; 
	List<VentaDetalle> lstVentaDetalle;
	 
     public VentasDetalleDAO() {
    	this.session = null;
        this.ventaDetalle =  null; 
     }
     
    @SuppressWarnings("unchecked")
	public List<VentaDetalle> getVentaDetalle(Long venta) {
    	 this.lstVentaDetalle = null;
    	 
    	 try {
    		 this.session = HibernateUtils.getSessionFactory().openSession();
    		 
    		 Query query = this.session.createQuery(
        	    "FROM VentaDetalle vd " +
        	    "WHERE vd.venta = :venta"
        	 );
        	 query.setParameter("venta", venta);
        	 
        	 this.lstVentaDetalle = (List<VentaDetalle>) query.getResultList();
        	 
        	 
        	 //System.out.println("TAMAÑO: " + this.lstVentaDetalle);
//        	 VentaDetalle d = this.lstVentaDetalle.get(0);
//        	 System.out.println("OBJETO: " + d.getCodigo());
    	 }
    	 catch(Throwable ex) {
    		 ex.printStackTrace();
    	 }
    	 finally {
    	     if(this.session != null)
    	    	this.session.close();
    	 }
    	 return this.lstVentaDetalle;
     }
    
    
    public VentaDetalle saveVentaDetalle(VentaDetalle ventaDetalle) {
    	VentaDetalle vd = null;
    	
    	try {
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		
    		this.session.save(ventaDetalle);
    		
    		this.session.beginTransaction().commit();
    		
    		vd = ventaDetalle;
    	}
    	catch(Throwable ex) {
    		vd = null;
    		if(this.session.getTransaction().isActive())
    		   this.session.beginTransaction().rollback();
    		
    		ex.printStackTrace();
    	}
    	finally {
   	        if(this.session != null) {
   	           this.session.close();
   	        }
   	    }
    	return vd;
    }
    
    public Long getLastId() {
    	Long lastID = 1L;
    	try {
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		Query q = this.session.createSQLQuery("SELECT (MAX(vd.id) + 1) FROM cajaregistradora01web.ventas_detalle vd");
    		
    		lastID = Long.parseLong(q.getSingleResult().toString());
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
    	
    	return lastID;
    }
}
