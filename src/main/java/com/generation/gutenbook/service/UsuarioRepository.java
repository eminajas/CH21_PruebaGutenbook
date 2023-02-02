package com.generation.gutenbook.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.gutenbook.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
