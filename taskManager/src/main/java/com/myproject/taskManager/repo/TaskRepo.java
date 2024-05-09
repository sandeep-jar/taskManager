package com.myproject.taskManager.repo;

import com.myproject.taskManager.model.Task;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;


public interface TaskRepo extends MongoRepository<Task,Integer> {
    List<Task> findAll();

    Optional<Task> findById(Integer id);

    boolean existsById(Integer id);
}
