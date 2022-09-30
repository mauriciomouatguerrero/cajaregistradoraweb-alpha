package com.cajaregistradora.struts6.models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="articulos", schema="cajaregistradora01web")
public class Articulo implements Serializable {
	private static final long serialVersionUID = 858324097378026541L;
	
	@Id
	private Long codigo;
	private String descripcion;
	private Integer precio;
	
	public Articulo() {
		
	}
	
	public Articulo(Long codigo, String descripcion, Integer precio) {
		super();
		this.codigo = codigo;
		this.descripcion = descripcion;
		this.precio = precio;
	}
	
	public Long getCodigo() {
		return codigo;
	}
	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Integer getPrecio() {
		return precio;
	}
	public void setPrecio(Integer precio) {
		this.precio = precio;
	}

	
}
