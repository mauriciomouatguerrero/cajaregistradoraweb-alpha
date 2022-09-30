package com.cajaregistradora.struts6.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ventas_detalle", schema="cajaregistradora01web")
public class VentaDetalle implements Serializable {
	private static final long serialVersionUID = 2571525952667521352L;
    
	@Id
	private Long id;	
	private Long codigo;
	private Long venta;
	private Long cantidad;
	private Long precio;
	private Long total;
	
	Articulo articulo;
	
	public VentaDetalle() {
		
	}
	
	public VentaDetalle(Long venta, Long codigo, Long cantidad, Long precio, Long total) {
		this.venta = venta;
		this.codigo = codigo;
		this.cantidad = cantidad;
		this.precio = precio;
		this.total = total;
	}
	
    public VentaDetalle(Long id, Long venta, Long codigo, Long cantidad, Long precio, Long total) {
		this.venta = venta;
		this.codigo = codigo;
		this.cantidad = cantidad;
		this.precio = precio;
		this.total = total;
		this.id = id;
	}

	public Articulo getArticulo() {
		return articulo;
	}
	public void setArticulo(Articulo articulo) {
		this.articulo = articulo;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Long getVenta() {
		return venta;
	}

	public void setVenta(Long venta) {
		this.venta = venta;
	}

	public Long getCantidad() {
		return cantidad;
	}

	public void setCantidad(Long cantidad) {
		this.cantidad = cantidad;
	}

	public Long getPrecio() {
		return precio;
	}

	public void setPrecio(Long precio) {
		this.precio = precio;
	}

	public Long getTotal() {
		return total;
	}

	public void setTotal(Long total) {
		this.total = total;
	}
	
	
}
