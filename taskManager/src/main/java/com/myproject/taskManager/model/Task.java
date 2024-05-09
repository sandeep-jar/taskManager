package com.myproject.taskManager.model;

import lombok.Data;

@Data
public class Task {
    private String title;
    private Integer id = 0;
}
