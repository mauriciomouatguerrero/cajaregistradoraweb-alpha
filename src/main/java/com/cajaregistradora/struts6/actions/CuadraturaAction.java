package com.cajaregistradora.struts6.actions;

import javax.servlet.ServletException;

import com.opensymphony.xwork2.ActionSupport;

public class CuadraturaAction extends ActionSupport {
	private static final long serialVersionUID = 5996264742230895237L;
	
	private String cur_m1;
	private String cur_m2;
	private String cur_m3;
	private String cur_m4;
	private String cur_m5;
	private String cur_m6;

	
	public CuadraturaAction() {
		this.cur_m1 = "";
		this.cur_m2 = "";
		this.cur_m3 = "";
		this.cur_m4 = "";
		this.cur_m5 = "";
		this.cur_m6 = "current";
		
	}

	@Override
	public String execute() throws ServletException {
		
		return SUCCESS;
	}

	public String getCur_m1() {
		return cur_m1;
	}


	public void setCur_m1(String cur_m1) {
		this.cur_m1 = cur_m1;
	}


	public String getCur_m2() {
		return cur_m2;
	}


	public void setCur_m2(String cur_m2) {
		this.cur_m2 = cur_m2;
	}


	public String getCur_m3() {
		return cur_m3;
	}


	public void setCur_m3(String cur_m3) {
		this.cur_m3 = cur_m3;
	}


	public String getCur_m4() {
		return cur_m4;
	}


	public void setCur_m4(String cur_m4) {
		this.cur_m4 = cur_m4;
	}


	public String getCur_m5() {
		return cur_m5;
	}


	public void setCur_m5(String cur_m5) {
		this.cur_m5 = cur_m5;
	}


	public String getCur_m6() {
		return cur_m6;
	}


	public void setCur_m6(String cur_m6) {
		this.cur_m6 = cur_m6;
	}
    
	
}
