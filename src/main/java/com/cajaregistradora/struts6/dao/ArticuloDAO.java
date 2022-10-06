package com.cajaregistradora.struts6.dao;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.cajaregistradora.struts6.models.Articulo;

import org.hibernate.Session;

import java.util.List;

import javax.persistence.Query;

public class ArticuloDAO {
	HibernateUtils hibernateUtils;
	Session session;
	
	
    public ArticuloDAO() {
        this.session = null;
    }
    
    @SuppressWarnings("unchecked")
	public List<Articulo> getArticuloByDescripcion(String descripcion) {
    	List<Articulo> lst = null;
    	try {
    		
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		
    		Query query = this.session.createQuery(
    			"FROM Articulo a " +
    		    "WHERE a.descripcion LIKE :descripcion"
    		);
    		query.setParameter("descripcion", "%" + descripcion + "%");
    		
    		
    		if(query.getResultList().size() > 0) {
    		   lst = (List<Articulo>) query.getResultList();    		   
    		}
    		
    		this.session.close();
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
    	finally {
    		if(this.session != null)
    		   this.session.close();
    	}
    	return lst;
    }
    
    public Articulo getArticuloByCodigo(Long codigo) {
    	Articulo a = null;
    	try {
    		
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		
    		Query query = this.session.createQuery(
    			"FROM Articulo a " +
    		    "WHERE a.codigo = :codigo"
    		);
    		query.setParameter("codigo", codigo);
    		
    		if(query.getResultList().size() > 0) {
    		   a = (Articulo) query.getSingleResult();    		   
    		}
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
    	finally {
    		if(this.session != null)
    		   this.session.close();
    	}
    	return ((a != null) ? a : null);
    }
    
    public Articulo getArticulo(Articulo articulo) {
    	Articulo a = null;
    	try {
    		
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		
    		Query query = this.session.createQuery(
    			"FROM Articulo a " +
    		    "WHERE a.codigo = :codigo"
    		);
    		query.setParameter("codigo", articulo.getCodigo());
    		
    		if(query.getResultList().size() > 0) {
    		   a = (Articulo) query.getSingleResult();    		   
    		}
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
    	finally {
    		if(this.session != null)
    		   this.session.close();
    	}
    	return ((a != null) ? a : articulo);
    }
    
    @SuppressWarnings("unchecked")
	public List<Articulo> getArticulos() {
    	List<Articulo> lstArt = null;
    	
    	try {
            this.session = HibernateUtils.getSessionFactory().openSession();
    		
    		Query query = this.session.createQuery(
    			"FROM Articulo a" 
    		);
    		query.setMaxResults(80);
    		
    		 if(query.getResultList().size() > 0) {
    		    lstArt = (List<Articulo>) query.getResultList();    		   
    		 }
    	}
    	catch(Throwable ex) {
    		ex.printStackTrace();
    	}
      
    	return lstArt;
    }
}
