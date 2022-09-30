package com.cajaregistradora.struts6.dao;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.cajaregistradora.struts6.models.Venta;
import com.cajaregistradora.struts6.models.VentaDetalle;

import org.hibernate.Session;

import java.util.List;

import javax.persistence.Query;

public class VentasDAO {
     HibernateUtils hibernateUtils;
     Session session;
     List<VentaDetalle> ventaDetalle;
     
     public VentasDAO() {
    	 this.ventaDetalle = null;
         this.session = null;
     }
     
     public VentasDAO(Long venta) {
    	 this.ventaDetalle = null;
    	 this.session = null;
     }
     
     public Long getVentaFirstElement() {
    	 Long venta = 0L;
    	 try {
    		 this.session = HibernateUtils.getSessionFactory().openSession();
    		 
    		 Query query = this.session.createSQLQuery(
    	      	 "SELECT MIN(v.venta) FROM cajaregistradora01web.ventas v " 
    	     );
    	    		
    	     venta = Long.parseLong(
    	    	 query.getSingleResult().toString()
    	     );
    	 }
    	 catch(Throwable ex) {
    		 ex.printStackTrace();
    	 }
    	 
    	 return venta;
     }
     
     public Long getVentaLastElement() {
    	 Long v = 0L;
    	 try {
    		 this.session = HibernateUtils.getSessionFactory().openSession();
    		 
    		 Query query = this.session.createSQLQuery(
    	      	 "SELECT MAX(v.venta) FROM cajaregistradora01web.ventas v " 
    	     );
    	    		
    	     v = Long.parseLong(
    	    	 query.getSingleResult().toString()
    	     );
    	 }
    	 catch(Throwable ex) {
    		 ex.printStackTrace();
    	 }
    	 
    	 return v;
     }
     
     public Venta getVenta(Venta venta) {
    	 Venta v = null;
    	 
    	 try {
    		 this.session = HibernateUtils.getSessionFactory().openSession();
    		 
    		 Query query = this.session.createQuery(
    	      	 "FROM Venta v " +
    	         "WHERE v.venta = :venta"
    	     );
    	     query.setParameter("venta", venta.getVenta());
    	    		
    	     if(query.getResultList().size() > 0) {
    	        v = (Venta) query.getSingleResult();    		   
    	     }
    	     
    	 }
    	 catch(Throwable ex) {
    		 v = null;
    		 ex.printStackTrace();
    	 }
    	 finally {
    		 if(this.session != null)
      		   this.session.close();
    	 }
    	 
    	 return v;
     }
     
     public int save(Venta venta) {
    	 int status = 0;
    	 
    	 try {
    		 this.session = HibernateUtils.getSessionFactory().openSession();
    		 this.session.beginTransaction();
    		 
    		 this.session.save(venta);
    		 
    		 this.session.getTransaction().commit();
    		 status++;
    	 }
    	 catch(Throwable ex) {
    		 status= 0;
    		 this.session.getTransaction().rollback();
    		 ex.printStackTrace();
    	 }
    	 finally {
    		 if(this.session != null) {
    			this.session.close();
    		 }
    	 }
    	 return status;
     }

}
