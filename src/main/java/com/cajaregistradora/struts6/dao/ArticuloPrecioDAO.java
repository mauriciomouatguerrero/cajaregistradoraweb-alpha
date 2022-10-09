package com.cajaregistradora.struts6.dao;

import org.hibernate.Session;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.cajaregistradora.struts6.models.ArticuloPrecio;

public class ArticuloPrecioDAO {
    Session session;
    
    
    public ArticuloPrecioDAO() {
    	this.session = null;
    }
    
    public int save(ArticuloPrecio articuloPrecio) {
    	int status = 0;
    	
    	try {
    		this.session = HibernateUtils.getSessionFactory().openSession();
    		this.session.beginTransaction();
    		
    		this.session.save(articuloPrecio);
    		this.session.getTransaction().commit();
    		
    		this.session.close();
    		status++;
    	}
    	catch(Throwable ex) {
    		status = 0;
    		this.session.getTransaction().rollback();
    		ex.printStackTrace();
    	}
    	finally {
    		if(this.session.isOpen()) {
     		   this.session.close();	
     		}
    	}
    	
    	return status;
    }
}
