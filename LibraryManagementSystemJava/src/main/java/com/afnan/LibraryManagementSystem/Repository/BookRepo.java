package com.afnan.LibraryManagementSystem.Repository;

import com.afnan.LibraryManagementSystem.Entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends CrudRepository<Book,Integer> {
    public Book findByBookId(int bookId);
}
