package com.myproject.taskManager.controller;

import com.myproject.taskManager.model.Task;
import com.myproject.taskManager.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@RestController
public class TasksController {
    private final TaskRepo taskRepo;

    @Autowired
    public TasksController(TaskRepo taskRepo) {
        this.taskRepo = taskRepo;
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/all")
    public ResponseEntity<List<Task>> getAll() {
        return ResponseEntity.ok(taskRepo.findAll());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/task")
    public ResponseEntity<Task> getTask(@RequestParam Integer id) {
        if(null==id) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        Optional<Task> task = taskRepo.findById(id);
        if(task.isEmpty()) {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(task.get(),HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public ResponseEntity<String> addTask(@RequestBody Task task) {
        if(taskRepo.existsById(task.getId())) {
            return new ResponseEntity<>("task with this id already exists",HttpStatus.BAD_REQUEST);
        }
        Task task1 = taskRepo.save(task);
        return new ResponseEntity<>("done",HttpStatus.OK);
    }
}
