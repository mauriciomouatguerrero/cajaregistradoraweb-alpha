package com.cajaregistradora.hibernate5.utils;


import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;


public class HibernateUtils {
	private static final SessionFactory sessionFactory;

    static {
            try {
//            	StandardServiceRegistry standardRegistry = 
//         		       new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
//         			Metadata metaData = 
//         		        new MetadataSources(standardRegistry).getMetadataBuilder().build();
//         	    sessionFactory = metaData.getSessionFactoryBuilder().build(); 
            	
            	StandardServiceRegistry standardRegistry = new StandardServiceRegistryBuilder()
        				.configure().build();
		        Metadata metadata = new MetadataSources(standardRegistry)
		        		.getMetadataBuilder()
		        		.applyImplicitNamingStrategy(
		        				ImplicitNamingStrategyJpaCompliantImpl.INSTANCE)
		        		.build();
		        sessionFactory = metadata.getSessionFactoryBuilder().build();
            } catch (Throwable th) {
                    System.err.println("Enitial SessionFactory creation failed" + th);
                    throw new ExceptionInInitializerError(th);
            }
    }
    public static SessionFactory getSessionFactory() {
            return sessionFactory;
    }
}
