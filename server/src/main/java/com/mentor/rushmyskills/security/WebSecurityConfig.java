package com.mentor.rushmyskills.security;

import com.mentor.rushmyskills.security.filter.CorsRequestFilter;
import com.mentor.rushmyskills.security.token.JwtAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    public static final String JWT_TOKEN_HEADER_PARAM = "X-Authorization";
    public static final String FB_TOKEN_HEADER_PARAM = "FB-Access-Token";

    private static final String FORM_BASED_LOGIN_ENTRY_POINT = "/api/auth/login";
    private static final String TOKEN_BASED_AUTH_ENTRY_POINT = "/api/**";
    private static final String TOKEN_REFRESH_ENTRY_POINT = "/api/auth/token";
    private static final String H2_ENTRY_POINT = "/h2-console/**";

    private final RestAuthenticationEntryPoint authenticationEntryPoint;
    private final JwtAuthenticationProvider jwtAuthenticationProvider;
    private final CorsRequestFilter corsRequestFilter;

    @Autowired
    public WebSecurityConfig(RestAuthenticationEntryPoint authenticationEntryPoint,
                             JwtAuthenticationProvider jwtAuthenticationProvider,
                             CorsRequestFilter corsRequestFilter) {
        this.authenticationEntryPoint = authenticationEntryPoint;
        this.jwtAuthenticationProvider = jwtAuthenticationProvider;
        this.corsRequestFilter = corsRequestFilter;
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) {
        auth.authenticationProvider(jwtAuthenticationProvider);
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf().disable()
                // handle an authorized attempts
                .exceptionHandling().authenticationEntryPoint((req, rsp, e) -> rsp.sendError(HttpServletResponse.SC_UNAUTHORIZED))
                .authenticationEntryPoint(this.authenticationEntryPoint)

                .and()
                    // make sure we use stateless session; session won't be used to store user's state.
                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                    .authorizeRequests()
                    .antMatchers(FORM_BASED_LOGIN_ENTRY_POINT).permitAll()
                    .antMatchers(TOKEN_REFRESH_ENTRY_POINT).permitAll()

                    .anyRequest().authenticated()
/*                .antMatchers(H2_ENTRY_POINT).permitAll()*/
/*                .and()
                    .authorizeRequests()
                    .antMatchers(TOKEN_BASED_AUTH_ENTRY_POINT).authenticated()*/

                .and()
                    .addFilterBefore(corsRequestFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
