package com.cajaregistradora.struts6.models;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="articulos_precios", schema="cajaregistradora01web")
public class ArticuloPrecio implements Serializable {
	private static final long serialVersionUID = -5101960184566376326L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long codigo;
	Integer precio;
	Date fecha;
	Timestamp hora;
	
	public ArticuloPrecio() {
		
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Integer getPrecio() {
		return precio;
	}

	public void setPrecio(Integer precio) {
		this.precio = precio;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Timestamp getHora() {
		return hora;
	}

	public void setHora(Timestamp hora) {
		this.hora = hora;
	}
	
	
   
}
