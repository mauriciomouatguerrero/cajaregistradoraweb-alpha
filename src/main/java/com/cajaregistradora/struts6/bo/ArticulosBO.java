package com.cajaregistradora.struts6.bo;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

import com.cajaregistradora.struts6.dao.ArticuloDAO;
import com.cajaregistradora.struts6.dao.ArticuloPrecioDAO;
import com.cajaregistradora.struts6.models.Articulo;
import com.cajaregistradora.struts6.models.ArticuloPrecio;

public class ArticulosBO implements Serializable {
	private static final long serialVersionUID = -4554172973882741453L;
	
	public ArticulosBO() {
		
	}
	
	public int saveArticuloPrecio(Articulo articulo, Date fecha, Timestamp hora) {
		int status = 0;
		
		try {
			ArticuloPrecioDAO articuloPrecioDAO = new ArticuloPrecioDAO();
			ArticuloPrecio articuloPrecio = new ArticuloPrecio();
			
			articuloPrecio.setCodigo(articulo.getCodigo());
			articuloPrecio.setPrecio(articulo.getPrecio());
			articuloPrecio.setFecha(fecha);
			articuloPrecio.setHora(hora);
			
			if(articuloPrecioDAO.save(articuloPrecio) > 0) {
			   ArticuloDAO articuloDAO = new ArticuloDAO();
			   articuloDAO.update(articulo);
			   
			   status++;
			}
		}
		catch(Throwable ex) {
			status = 0;
			ex.printStackTrace();
		}
		
		return status;
	}

}
