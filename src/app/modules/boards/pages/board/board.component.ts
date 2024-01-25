import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { Component, inject } from '@angular/core';
import { TodoDialogComponent } from '@boards/components/todo-dialog/todo-dialog.component';
import { ToDo, Column } from '@models/todo.model';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    ButtonComponent,
    DragDropModule,
    DialogModule
],
  templateUrl: './board.component.html',
  styles: [
    `
    .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export default class BoardComponent {

  private dialog = inject(Dialog)
 
  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy a unicorn',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });
    dialogRef.closed.subscribe((output) => {
      console.log(output);
    });
  }

}