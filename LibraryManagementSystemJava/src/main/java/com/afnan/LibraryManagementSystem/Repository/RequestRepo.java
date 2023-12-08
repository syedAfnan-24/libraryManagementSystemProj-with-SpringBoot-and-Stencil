package com.afnan.LibraryManagementSystem.Repository;

import com.afnan.LibraryManagementSystem.Entity.Request;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepo extends CrudRepository<Request, Integer> {
}
