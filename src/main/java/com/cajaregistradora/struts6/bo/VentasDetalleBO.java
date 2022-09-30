package com.cajaregistradora.struts6.bo;


import org.json.JSONObject;

import com.cajaregistradora.struts6.dao.VentasDetalleDAO;
import com.cajaregistradora.struts6.models.VentaDetalle;

public class VentasDetalleBO {
	
	public VentasDetalleBO() {
		
	}
	
	public JSONObject save(Long numventa, String[] codigos, String[] cantidades, String[] precios, String[] subtotales) {
		JSONObject jsonO = new JSONObject();
		
		String[] arr_codigos = codigos[0].toString().split(",");
        String[] arr_cantidades = cantidades[0].toString().split(",");
        String[] arr_precios = precios[0].toString().split(",");
        String[] arr_subtotales = subtotales[0].toString().split(",");
		
		try {
			
			for(int i=0;i < (arr_codigos.length-1);i++) {
				Long codigo = Long.parseLong(arr_codigos[i].toString().replace("[","")
						                                              .replace("]", "")
						                                              .replace("\"", "")
			    );
				Long cantidad = Long.parseLong(arr_cantidades[i].toString().replace("[","")
						                                              .replace("]", "")
						                                              .replace("\"", "")
			    );
				Long precio = Long.parseLong(arr_precios[i].toString().replace("[","")
						                                              .replace("]", "")
						                                              .replace("\"", "")
	            );
				Long subtotal = Long.parseLong(arr_subtotales[i].toString().replace("[","")
						                                                   .replace("]", "")
						                                                   .replace("\"", "")
			    );
				
				VentasDetalleDAO vdDAO = new VentasDetalleDAO();
				vdDAO.saveVentaDetalle(
						new VentaDetalle(vdDAO.getLastId(), numventa, codigo, cantidad, precio, subtotal)
				);
				System.out.println(
					"Tupla " + (i+1) + ": " + 
				    codigo + " - " +
                    cantidad + " - " +
				    precio + " - " +
                    subtotal
				);				
			}
			jsonO.put("status", true);
		}
		catch(Throwable ex) {
			jsonO = null;
			ex.printStackTrace();
		}
		
		return jsonO;
	}

}
