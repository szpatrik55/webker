import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/services/task.service';
import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  termekek: Task[] = [];
  isAuthenticated = true;
  mennyisegek = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.termekek = tasks;
      console.log('Termékek betöltve:', this.termekek);
    });
  }

  kosarhozAd(termek: Task) {
    console.log('Kosárhoz adva termék:', termek);
    // Ide jöhet a kosárkezelő logika
  }
}
