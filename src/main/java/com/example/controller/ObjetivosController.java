/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.controller;

import com.example.jpa.db.Areas;
import com.example.services.AreaServices;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author carlos
 */
@RestController
public class ObjetivosController {
    
    
    @Autowired
    private AreaServices as;

    @RequestMapping(method = RequestMethod.GET, path = "/areas/all")
    public ResponseEntity<?> getPersons(){
    	List<Areas> ans = as.getAllAreas();
        return new ResponseEntity<>(as, HttpStatus.OK);
		
    }
    
    @RequestMapping(value = "areas/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Areas> getProducto(@PathVariable("id") Long id) {
        Areas a = as.getAreaById(id);
        return new ResponseEntity<>(a, HttpStatus.OK);
    }
    
    @RequestMapping(value = "areas/insert", method = RequestMethod.POST)
    public ResponseEntity<Void> insertProducto(@RequestBody Areas p) {
        as.saveArea(p);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    
}