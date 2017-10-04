package com.example.jpa;

import com.example.jpa.db.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;


@Transactional
public interface PersonRepository extends JpaRepository<Person, Long>  {
}

