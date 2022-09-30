package com.cajaregistradora.struts6.actions;

import javax.servlet.ServletException;

import org.hibernate.Session;

import com.cajaregistradora.hibernate5.utils.HibernateUtils;
import com.opensymphony.xwork2.ActionSupport;

public class SessionAction extends ActionSupport {
	private static final long serialVersionUID = -4440242979461365437L;

	Session session;
	HibernateUtils contextdb;
	
	@Override
	public String execute() throws ServletException {
//		session = contextdb.getSessionFactory().openSession();
//		
//		session.close();
		
		
		return SUCCESS;
	}
}
