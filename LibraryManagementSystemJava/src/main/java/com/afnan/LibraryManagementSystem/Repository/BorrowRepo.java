package com.afnan.LibraryManagementSystem.Repository;

import com.afnan.LibraryManagementSystem.Entity.Borrow;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BorrowRepo extends CrudRepository<Borrow, Integer> {
}
