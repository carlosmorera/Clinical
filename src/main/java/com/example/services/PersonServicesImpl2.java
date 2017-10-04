package  com.example.services;

import org.springframework.stereotype.Service;
import com.example.jpa.GenericService;
import com.example.jpa.db.Objetivo;
import com.example.jpa.db.ObjetivoCurriculum;
import com.example.jpa.db.Person;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

//@Service
public class PersonServicesImpl2 implements PersonServices{

    @Autowired
    private GenericService ps;
    
    public PersonServicesImpl2(final GenericService gs){
        this.ps=gs;
    }

    @Override
    public void savePerson(Person p) {
        ps.save(p);
    }

    @Override
    public List<Person> getPersons() {
	ArrayList<Person> ans =new ArrayList<Person>();
	for (Object o : ps.findAll()) {
	ans.add((Person) o);
	}
	return ans;
    }

    @Override
    public void updatePerson(Person p) {
    	ps.update(p);
    }


    @Override
    public Person getPerson(Long pId) {
        return (Person) ps.get(pId);
    }


    @Override
    public void deleteObjetivoCurriculum(Long id, String objetivo) {
        Person p=this.getPerson(id);
        Set<ObjetivoCurriculum> objs= p.getObjetivoscurriculums();
        for(ObjetivoCurriculum oc: objs){
            if(oc.getNombreObjetivo().equals(objetivo))
               oc.setEstado("no");
        }

        this.updatePerson(p);
    }

    @Override
    public void saveObjetivo(Objetivo o) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Objetivo getObjetivo(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Objetivo> getAllObjetivos() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void deleteObjetivo(Long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
