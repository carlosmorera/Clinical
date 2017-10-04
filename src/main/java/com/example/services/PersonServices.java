package  com.example.services;

import com.example.jpa.db.Objetivo;
import com.example.jpa.db.Person;
import java.io.IOException;
import java.util.List;
import java.util.LongSummaryStatistics;

public interface PersonServices {
    public void savePerson(Person p);
    public List<Person> getPersons();
    public void updatePerson(Person p);
    public Person getPerson(Long pId);
    public void deleteObjetivoCurriculum(Long id, String objetivo);
    public void saveObjetivo(Objetivo o);
    public Objetivo getObjetivo(Long id);
    public List<Objetivo> getAllObjetivos();
    public void deleteObjetivo(Long id);

}
