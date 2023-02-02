package com.generation.gutenbook.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.generation.gutenbook.model.Usuario;
import com.generation.gutenbook.service.UsuarioService;

@RestController
@RequestMapping(path="/api/usuarios")

public class UsuarioController {
	private final UsuarioService usuarioService;

	@Autowired
	public UsuarioController(UsuarioService usuarioService) {
		this.usuarioService = usuarioService;
}//constructor
	
	@GetMapping //http://localhost:8080/api/productos/
	public List<Usuario> getAllUsuario(){
		return usuarioService.getAllUsuario();
	}//GetAllProductos
	
	@GetMapping(path="{IDusuario}")
	public Usuario getUsuario(@PathVariable("IDusuario") Integer IDusuario) {
		return usuarioService.getUsuario(IDusuario);
	}//getProducto
	
	@DeleteMapping(path="{IDusuario}")
	public Usuario deleteUsuario(@PathVariable("IDusuario") Integer IDusuario) {
		return usuarioService.deleteUsuario(IDusuario);
	}//getProducto
	
	@PostMapping
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return usuarioService.addUsuario(usuario);
	}//addProducto
	
	@PutMapping(path="{IDusuario}")
	public Usuario updateUsuario(@PathVariable("IDusuario") Integer IDusuario,
		@RequestParam(required = false) String usuario,
		@RequestParam(required = false) String nombre,
		@RequestParam(required = false) String correoElectronico,
		@RequestParam(required = false) String telefono,
		@RequestParam(required = false) String contrasenia,
		@RequestParam(required = false) String administrador) {
		return usuarioService.updateUsuario(IDusuario, usuario, nombre, correoElectronico, telefono,contrasenia,administrador);
	}//getProducto

}




