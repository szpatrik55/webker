import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateFormatterPipe } from '../../shared/pipes/date.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    DateFormatterPipe,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  displayedColumns: string[] = ['name', 'date', 'time', 'actions'];
  
  completedTasks = [
    {
      name: 'Serie Walter Hypernova 360',
      date: '2025-03-01T14:30:00Z',
      time: '20 óra'
    },
    {
      name: 'By Döme Fine Carp 390L',
      date: '2025-02-28T09:15:42Z',
      time: '12 óra'
    }
  ];
  
  deleteTask(index: number): void {
    this.completedTasks = this.completedTasks.filter((_, i) => i !== index);
  }
  
  clearAllTasks(): void {
    this.completedTasks = [];
  }
}