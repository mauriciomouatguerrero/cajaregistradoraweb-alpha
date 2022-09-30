package com.cajaregistradora.struts6.dao;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.cajaregistradora.struts6.models.Articulo;

import org.hibernate.Session;
import javax.persistence.Query;

public class ArticuloDAO {
	HibernateUtils hibernateUtils;
	Session session;
	
	
    public ArticuloDAO() {
        this.session = null;
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
}
