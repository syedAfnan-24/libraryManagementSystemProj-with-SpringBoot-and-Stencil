package com.afnan.LibraryManagementSystem.Repository;

import com.afnan.LibraryManagementSystem.Entity.Returns;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReturnsRepo extends CrudRepository<Returns,Integer> {
}
