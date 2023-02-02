package com.generation.gutenbook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.generation.gutenbook.model.Usuario;

@Service
public class UsuarioService {
	
	private final UsuarioRepository usuarioRepository;
	
	@Autowired
	public UsuarioService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}//constructor
	
	public List<Usuario> getAllUsuario(){
		return usuarioRepository.findAll();
	}//GetAllUsuario
	
	public Usuario getUsuario(Integer IDusuario) {
		return usuarioRepository.findById(IDusuario).orElseThrow(
				()-> new IllegalArgumentException("El libro con el id " + IDusuario + " no existe."));
	}//getUsuario
	
	public Usuario deleteUsuario(Integer IDusuario) {
		Usuario tmp = null;
		if(usuarioRepository.existsById(IDusuario)) {
			tmp=usuarioRepository.findById(IDusuario).get();
			usuarioRepository.deleteById(IDusuario);
		}//if
		return tmp;
	}//deleteUsuario
	
	public Usuario addUsuario(Usuario usuario) {
		return usuarioRepository.save(usuario);
	}//AddUsuario
	
	public Usuario updateUsuario(Integer IDusuario, String usuario, String nombre, String correoElectronico, String telefono, String contrasenia,
			String administrador) {
		Usuario tmp = null;
		if(usuarioRepository.existsById(IDusuario)) {
			tmp=usuarioRepository.findById(IDusuario).get();
			if(usuario!=null) tmp.setUsuario(usuario);
			if(nombre!=null)tmp.setNombre(nombre);
			if(correoElectronico!=null)tmp.setCorreoElectronico(correoElectronico);
			if(telefono!=null)tmp.setTelefono(telefono);
			if(contrasenia!=null)tmp.setContrasenia(contrasenia);
			if(administrador!=null)tmp.setAdministrador(administrador);
			usuarioRepository.save(tmp);
			}else {
				System.out.println("Update - El Usuario con el id " + IDusuario + " no existe");
			}
		return tmp;
	}//Update Producto
}
