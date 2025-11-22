import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from './task.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    FormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule
  ]
})
export class App implements OnInit {

  displayedColumns: string[] = ['title', 'description', 'completed', 'actions'];
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  addTask() {
    if (!this.newTask.title.trim()) return;

    this.taskService.createTask(this.newTask).subscribe(created => {
      this.tasks.push(created);
      this.newTask = { title: '', description: '', completed: false };
    });
  }

  toggleComplete(task: Task) {
    const updated = { ...task, completed: !task.completed };
    this.taskService.updateTask(task.id!, updated).subscribe(res => {
      task.completed = res.completed;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id!).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
}
