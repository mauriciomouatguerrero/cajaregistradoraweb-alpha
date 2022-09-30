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
@Table(name="ventas", schema="cajaregistradora01web")
public class Venta implements Serializable {
	private static final long serialVersionUID = -8492694871752850288L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long venta;
	private Date fecha;
	private Timestamp hora;
	private Long totalVenta;
	private Long totalIvaAplicado;
	private Long totalCigarros;
	private Long totalPagado;
	private Long totalVuelto;
	private char boletaFactura;
	private char formaPago;
	private String observaciones;
	
	
	
	public Venta() {
		super();
	}
	
	
	
	public Venta(Long venta, Date fecha, Timestamp hora, Long totalVenta, Long totalIvaAplicado, Long totalCigarros,
			Long totalPagado, Long totalVuelto, char boletaFactura, char formaPago, String observaciones) {
		super();
		this.venta = venta;
		this.fecha = fecha;
		this.hora = hora;
		this.totalVenta = totalVenta;
		this.totalIvaAplicado = totalIvaAplicado;
		this.totalCigarros = totalCigarros;
		this.totalPagado = totalPagado;
		this.totalVuelto = totalVuelto;
		this.boletaFactura = boletaFactura;
		this.formaPago = formaPago;
		this.observaciones = observaciones;
	}


	
	public Long getVenta() {
		return venta;
	}
	public void setVenta(Long venta) {
		this.venta = venta;
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
	public Long getTotalVenta() {
		return totalVenta;
	}
	public void setTotalVenta(Long totalVenta) {
		this.totalVenta = totalVenta;
	}
	public Long getTotalIvaAplicado() {
		return totalIvaAplicado;
	}
	public void setTotalIvaAplicado(Long totalIvaAplicado) {
		this.totalIvaAplicado = totalIvaAplicado;
	}
	public Long getTotalCigarros() {
		return totalCigarros;
	}
	public void setTotalCigarros(Long totalCigarros) {
		this.totalCigarros = totalCigarros;
	}
	public Long getTotalPagado() {
		return totalPagado;
	}
	public void setTotalPagado(Long totalPagado) {
		this.totalPagado = totalPagado;
	}
	public Long getTotalVuelto() {
		return totalVuelto;
	}
	public void setTotalVuelto(Long totalVuelto) {
		this.totalVuelto = totalVuelto;
	}
	public char getBoletaFactura() {
		return boletaFactura;
	}
	public void setBoletaFactura(char boletaFactura) {
		this.boletaFactura = boletaFactura;
	}
	public char getFormaPago() {
		return formaPago;
	}
	public void setFormaPago(char formaPago) {
		this.formaPago = formaPago;
	}
	public String getObservaciones() {
		return observaciones;
	}
	public void setObservaciones(String observaciones) {
		this.observaciones = observaciones;
	}
	
	

}
