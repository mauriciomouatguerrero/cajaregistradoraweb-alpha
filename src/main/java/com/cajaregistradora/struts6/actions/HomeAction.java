package com.cajaregistradora.struts6.actions;

import java.io.IOException;
//import java.io.PrintWriter;
import java.io.Serializable;
//import java.util.List;
//import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
//import org.apache.struts2.ServletActionContext;
//import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;

import com.opensymphony.xwork2.ActionSupport;

public class HomeAction extends ActionSupport implements Serializable {
	private static final long serialVersionUID = 3794227196771693588L;
    
	private String cur_m1;
	private String cur_m2;
	private String cur_m3;
	private String cur_m4;
	private String cur_m5;
	private String cur_m6;
	
	HashMap<String, Object> dataList = null;
	
	public HomeAction() {
		this.cur_m1 = "current";
		this.cur_m2 = "";
		this.cur_m3 = "";
		this.cur_m4 = "";
		this.cur_m5 = "";
		this.cur_m6 = "";
		
	}
	
	public String execute() throws ServletException {
		
		return SUCCESS;
    }
	
	public void getData(HttpServletRequest request) throws ServletException, IOException {
		// String[] value = new String[] { "mauricio", "gonzalo", "jorge" };
		
//        this.dataList = new HashMap<String, Object>();
//		
//    	this.dataList.put("nombre", "mauricio mouat");
//    	this.dataList.put("direccion", "independencia 2378");
//    	this.dataList.put("telefono", "+56965474096");
//    	
//    	HttpServletResponse response = ServletActionContext.getResponse();
//    	response.setContentType("text/plain;charset=utf-8");
//    	PrintWriter pw = response.getWriter();
//    	
//    	pw.println(new JSONObject(this.dataList).toString());
//    	pw.flush();
//    	
//    	System.out.println(request.getParameter("nombre"));
    	
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getCur_m1() {
		return cur_m1;
	}

	public String getCur_m2() {
		return cur_m2;
	}

	public String getCur_m3() {
		return cur_m3;
	}

	public String getCur_m4() {
		return cur_m4;
	}

	public String getCur_m5() {
		return cur_m5;
	}

	public HashMap<String, Object> getDataList() {
		return dataList;
	}

	public void setDataList(HashMap<String, Object> dataList) {
		this.dataList = dataList;
	}

	public String getCur_m6() {
		return cur_m6;
	}

	public void setCur_m6(String cur_m6) {
		this.cur_m6 = cur_m6;
	}

		
	
}
