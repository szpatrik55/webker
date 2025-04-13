export interface Task {
    id: number;
    name: string;
    completed: boolean;
    priority: 'Magas' | 'Közepes' | 'Alacsony';
    dueDate: Date;
    description?: string;
  }