package com.example.services;

import aj.org.objectweb.asm.Type;
import com.example.jpa.ObjetivoCurriculumRepository;
import com.example.jpa.ObjetivoRepository;
import com.example.jpa.PersonRepository;
import com.example.jpa.PuntucaionCuatrimestralReposotory;
import com.example.jpa.db.Objetivo;
import com.example.jpa.db.ObjetivoCurriculum;
import com.example.jpa.db.Person;
import com.example.jpa.db.PuntuacionCuatrimestral;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class PersonServicesImpl1 implements PersonServices {

    @Autowired
    PersonRepository perRepo;

    @Autowired
    ObjetivoCurriculumRepository objCurRepo;

    @Autowired
    PuntucaionCuatrimestralReposotory puntCuatRepo;

    @Autowired
    ObjetivoRepository objRepo;

    List<Person> personList = new ArrayList<>();

    @Override
    public void savePerson(Person p) {
        perRepo.save(p);
    }

    @Override
    public List<Person> getPersons() {
        return perRepo.findAll();
    }

    @Override
    public void updatePerson(Person p) {

        Object[] obCuList = p.getObjetivoscurriculums().toArray();
        for (Object oc : obCuList) {
            ObjetivoCurriculum o = (ObjetivoCurriculum) oc;
            Object[] puntList = o.getPuntuacionescuatrimestrals().toArray();
            for (Object pun : puntList) {
                PuntuacionCuatrimestral pc = (PuntuacionCuatrimestral) pun;
                pc.setObjetivoscurriculum(o);
                puntCuatRepo.save((PuntuacionCuatrimestral) pun);
            }
            o.setPersons(p);
            objCurRepo.save(o);
        }
        Set<Objetivo> ob = p.getProgramaIndividual();
        for (Objetivo o : ob) {
            if (o.getObjetivoId() == null) {
                o.setPersons(p);
                objRepo.save(o);
            }
        }
        perRepo.save(p);

    }

    @Override
    public Person getPerson(Long pId) {
        return perRepo.findOne(pId);
    }

    @Override
    public void deleteObjetivoCurriculum(Long id, String objetivo) {

        objCurRepo.delete(id);
    }

    @Override
    public void saveObjetivo(Objetivo o) {
        objRepo.save(o);
    }

    @Override
    public Objetivo getObjetivo(Long id) {
        return objRepo.findOne(id);
    }

    @Override
    public List<Objetivo> getAllObjetivos() {
        return objRepo.findAll();
    }

    @Override
    public void deleteObjetivo(Long id) {
        objRepo.delete(id);
    }

}
