import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      name: 'Horgok',
      completed: false,
      priority: 'Magas',
      dueDate: new Date('2025-04-25'),
      description: '10-12-14 es méretekben'
    },
    {
      id: 2,
      name: 'Előke',
      completed: false,
      priority: 'Közepes',
      dueDate: new Date('2025-04-29'),
      description: 'Fonott és monofil'
    },
    {
      id: 3,
      name: 'Főzsinór',
      completed: false,
      priority: 'Alacsony',
      dueDate: new Date('2025-04-29'),
      description: 'Tubertini Gorilla Feeder'
    }
  ];
  
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);
  
  constructor() { }


  getAllTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Omit<Task, 'id'>): Promise<Task> {
    return new Promise((resolve) => {
      const newId = this.tasks.length > 0 
        ? Math.max(...this.tasks.map(t => t.id)) + 1 
        : 1;
      
      const newTask: Task = {
        ...task,
        id: newId
      };
      
      this.tasks.push(newTask);
      
      this.tasksSubject.next([...this.tasks]);
      
      setTimeout(() => {
        resolve(newTask);
      }, 1000);
    });
  }
}