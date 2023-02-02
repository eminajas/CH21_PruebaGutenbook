package com.generation.gutenbook.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.generation.gutenbook.model.Libro;



public interface LibroRepository extends JpaRepository<Libro, Integer> {
	
}
