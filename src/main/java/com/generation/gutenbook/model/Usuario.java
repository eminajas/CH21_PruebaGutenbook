package com.generation.gutenbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="IDusuario", unique=true, nullable=false)
	
	private Integer IDusuario;
	@Column(nullable=false)
	private String usuario;
	private String nombre;
	private String correoElectronico;
	private String telefono;
	private String contrasenia;
	@Column(nullable=true)
	private String administrador;
	
	public Usuario() {
		//Vacio
	}

	public Usuario(String usuario, String nombre, String correoElectronico, String telefono, String contrasenia,
			String administrador) {
		super();
		this.usuario = usuario;
		this.nombre = nombre;
		this.correoElectronico = correoElectronico;
		this.telefono = telefono;
		this.contrasenia = contrasenia;
		this.administrador = administrador;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreoElectronico() {
		return correoElectronico;
	}

	public void setCorreoElectronico(String correoElectronico) {
		this.correoElectronico = correoElectronico;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}

	public String getAdministrador() {
		return administrador;
	}

	public void setAdministrador(String administrador) {
		this.administrador = administrador;
	}

	public Integer getIDusuario() {
		return IDusuario;
	}

	@Override
	public String toString() {
		return "Usuario [IDusuario=" + IDusuario + ", usuario=" + usuario + ", nombre=" + nombre
				+ ", correoElectronico=" + correoElectronico + ", telefono=" + telefono + ", contrasenia=" + contrasenia
				+ ", administrador=" + administrador + "]";
	}
	
	
}
