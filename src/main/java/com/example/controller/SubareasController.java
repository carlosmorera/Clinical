/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.controller;

import com.example.jpa.db.Subareas;
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
@RequestMapping("/subareas")
public class SubareasController {

    @Autowired
    private AreaServices as;

    @RequestMapping(method = RequestMethod.GET, value = "/all")
    public ResponseEntity<?> getSubAreas() {
        List<Subareas> ans = as.getAllSubareas();
        return new ResponseEntity<>(ans, HttpStatus.OK);

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Subareas> getSubAreaById(@PathVariable("id") Long id) {
        Subareas a = as.getSubareaById(id);
        return new ResponseEntity<>(a, HttpStatus.OK);
    }

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    public ResponseEntity<Void> insertProducto(@RequestBody Subareas p) {
        as.saveSubarea(p);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
