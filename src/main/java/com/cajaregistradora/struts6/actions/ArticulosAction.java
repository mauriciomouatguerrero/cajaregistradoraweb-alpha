package com.cajaregistradora.struts6.actions;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serializable;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.cajaregistradora.struts6.dao.ArticuloDAO;
import com.cajaregistradora.struts6.models.Articulo;
import com.opensymphony.xwork2.ActionSupport;

public class ArticulosAction extends ActionSupport implements Serializable {
	private static final long serialVersionUID = -7651334443806049790L;

	Articulo articulo;
	
	public ArticulosAction() {
		this.articulo = null;
	}
	
    public String execute() throws ServletException {
    	return SUCCESS;
    }
	
	public void getArticulo() throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		String codigo = request.getParameter("codigo");
		
		this.articulo = new Articulo(
			Long.parseLong(codigo), 
			"producto no encontrado", 
		    0
	    );
		
		// NO HAY Business Object DEFINIDO AUN, SE LLAMA DIRECTO A DAO
		ArticuloDAO articuloDAO = new ArticuloDAO();		
		Articulo articulo = articuloDAO.getArticulo(this.articulo);	
		
		System.out.println(new JSONObject(articulo));
	    
	    HttpServletResponse response = ServletActionContext.getResponse();
	    response.setContentType("text/plain;charset=utf-8");
	    	
	    PrintWriter pw = response.getWriter();    	
	    pw.println(new JSONObject(articulo).toString());
	    pw.flush();	

    }
	
	public void getListArticulos() throws IOException {
		ArticuloDAO artDAO = new ArticuloDAO();
		List<Articulo> lst = artDAO.getArticulos();
		
		JSONObject obj = new JSONObject();
		obj.put("lista", lst);
		
		PrintWriter pw = ServletActionContext.getResponse().getWriter();    	
	    pw.println(obj);
	    pw.flush();	
		
	}
	
	public void getListArticulosByDesc() throws IOException {
		String descripcion = ServletActionContext.getRequest().getParameter("descripcion");
		
		ArticuloDAO artDAO = new ArticuloDAO();
		List<Articulo> lst = artDAO.getArticuloByDescripcion(descripcion);
		
		JSONObject obj = new JSONObject();
		obj.put("lista", lst);
		
		PrintWriter pw = ServletActionContext.getResponse().getWriter();    	
	    pw.println(obj);
	    pw.flush();	
		
	}
}
