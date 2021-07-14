package org.mycash.security;

import java.util.Collections;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/*
 cors - nessa classe estaremos configuranco cors
 */
@Configuration
public class corsConfig {
	
	@Bean
	public FilterRegistrationBean<CorsFilter> corsFilterRegistrationBean(){
		
		CorsConfiguration config = new CorsConfiguration();
		
		config.setAllowCredentials(false);
		//configuração do filter do cors, 
		config.setAllowedOrigins(Collections.singletonList("http://localhost:8080")); // esta sendo definido as origens q é permitida, o * sig q qualquer cliente vai conseguir fazer request com a api, http://localhost:9090/mycash apenas clientes com este host pode acessa api back-end
		config.setAllowedMethods(Collections.singletonList("*")); // methods é post,get, delete, o * informa q todos os metodos podem ser utilizados
		config.setAllowedHeaders(Collections.singletonList("*")); //leitura de heads, todos tipos de headers, ou headers especificos
		
		//a url, informa de onde vem a configuraçao esta acima,
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/oauth/**", config); //registraa para oauth e vem dentro
		source.registerCorsConfiguration("/api/**", config); //registra para api e o vem dentro da api, ex /api/lancamento
		
		
		FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>();
		bean.setFilter(new CorsFilter(source)); //vamos passar toda a configurção para registros do corsFilter
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);//coloca uma precedencia maxima em cima dos filters, para que na hora ele subir a app ele pega os filter padrão do spring boot
		
		return bean;
	}

}
