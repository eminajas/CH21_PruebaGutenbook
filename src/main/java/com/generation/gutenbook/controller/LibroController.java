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

import com.generation.gutenbook.model.Libro;
import com.generation.gutenbook.service.LibroService;

@RestController
@RequestMapping(path="/api/libros")
public class LibroController {
	private final LibroService libroService;

	@Autowired
	public LibroController(LibroService libroService) {
		this.libroService = libroService;
}//constructor
	
	@GetMapping //http://localhost:8080/api/productos/
	public List<Libro> getAllLibros(){
		return libroService.getAllLibros();
	}//GetAllProductos
	
	@GetMapping(path="{libroId}")
	public Libro getLibro(@PathVariable("libroId") Integer libroID) {
		return libroService.getLibro(libroID);
	}//getProducto
	
	@DeleteMapping(path="{libroId}")
	public Libro deleteLibro(@PathVariable("libroId") Integer libroID) {
		return libroService.deleteLibro(libroID);
	}//getProducto
	
	@PostMapping
	public Libro addLibro(@RequestBody Libro libro) {
		return libroService.addLibro(libro);
	}//addProducto
	
	@PutMapping(path="{libroId}")
	public Libro updateLibro(@PathVariable("libroId") Integer libroID,
		@RequestParam(required = false) String titulo,
		@RequestParam(required = false) String autor,
		@RequestParam(required = false) String url,
		@RequestParam(required = false) String genero,
		@RequestParam(required = false) Integer anioPublicacion,
		@RequestParam(required = false) String description,
		@RequestParam(required = false) String editorial,
		@RequestParam(required = false) Double precio) {
		return libroService.updateLibro(libroID, titulo, autor, url, genero,anioPublicacion,description,editorial, precio);
	}//getProducto
	
	
}//class ProductoController

