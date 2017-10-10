/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.jpa.AreaRepository;
import com.example.jpa.ListaObjetivosRepository;
import com.example.jpa.SubareaRepository;
import com.example.jpa.db.Areas;
import com.example.jpa.db.ListaObjetivos;
import com.example.jpa.db.Subareas;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AreaServicesImpl implements AreaServices {

    @Autowired
    AreaRepository areaRepo;

    @Autowired
    SubareaRepository subRepo;

    @Autowired
    ListaObjetivosRepository objRepo;

    @Override
    public void saveArea(Areas a) {
        areaRepo.save(a);
    }

    @Override
    public List<Areas> getAllAreas() {
        return areaRepo.findAll();
    }

    @Override
    public Areas getAreaById(Long id) {
        return areaRepo.findOne(id);
    }

    @Override
    public void saveSubarea(Subareas a) {
        subRepo.save(a);
    }

    @Override
    public List<Subareas> getAllSubareas() {
        return subRepo.findAll();
    }

    @Override
    public Subareas getSubareaById(Long ig) {
        return subRepo.findOne(ig);
    }

    @Override
    public void saveObjetivo(ListaObjetivos a) {
        objRepo.save(a);
    }

    @Override
    public List<ListaObjetivos> getAllObjetivos() {
        return objRepo.findAll();
    }

    @Override
    public ListaObjetivos getObjetivosById(Long ig) {
        return objRepo.findOne(ig);
    }

}
