package com.generation.gutenbook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.generation.gutenbook.model.Libro;

@Service
public class LibroService {
	
	private final LibroRepository libroRepository;
	
	@Autowired
	public LibroService(LibroRepository libroRepository) {
		this.libroRepository = libroRepository;
	}//constructor
	
	public List<Libro> getAllLibros(){
		return libroRepository.findAll();
	}//GetAllLibro
	
	public Libro getLibro(Integer libroID) {
		return libroRepository.findById(libroID).orElseThrow(
				()-> new IllegalArgumentException("El libro con el id " + libroID + " no existe."));
	}//getLibro
	
	public Libro deleteLibro(Integer libroID) {
		Libro tmp = null;
		if(libroRepository.existsById(libroID)) {
			tmp=libroRepository.findById(libroID).get();
			libroRepository.deleteById(libroID);
		}//if
		return tmp;
	}//deleteLibro
	
	public Libro addLibro(Libro libro) {
		return libroRepository.save(libro);
	}//AddLibro
	
	public Libro updateLibro(Integer libroID, String titulo, String autor, String url, String genero, Integer anioPublicacion, String description,
			String editorial, Double precio) {
		Libro tmp = null;
		if(libroRepository.existsById(libroID)) {
			tmp=libroRepository.findById(libroID).get();
			if(titulo!=null) tmp.setTitulo(titulo);
			if(autor!=null)tmp.setAutor(autor);
			if(url!=null)tmp.setUrl(url);
			if(genero!=null)tmp.setGenero(genero);
			if(anioPublicacion!=null)tmp.setAnioPublicacion(anioPublicacion);
			if(description!=null)tmp.setDescription(description);
			if(editorial!=null)tmp.setEditorial(editorial);
			if(precio!=null)tmp.setPrecio(precio.doubleValue());
			libroRepository.save(tmp);
			}else {
				System.out.println("Update - El Producto con el id " + libroID + " no existe");
			}
		return tmp;
	}//Update Producto
}
