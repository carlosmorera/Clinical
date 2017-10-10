/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.jpa.db.Areas;
import com.example.jpa.db.ListaObjetivos;
import com.example.jpa.db.Subareas;
import java.util.List;

/**
 *
 * @author carlos
 */
public interface AreaServices {
    public void saveArea(Areas a);
    public List<Areas> getAllAreas();
    public Areas getAreaById(Long ig);
    
    public void saveSubarea(Subareas a);
    public List<Subareas> getAllSubareas();
    public Subareas getSubareaById(Long ig);
    
    public void saveObjetivo(ListaObjetivos a);
    public List<ListaObjetivos> getAllObjetivos();
    public ListaObjetivos getObjetivosById(Long ig);
}
