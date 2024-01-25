import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';

import { Component, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faCheckSquare, faCheckToSlot, faClock, faClose, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '@models/todo.model';
import { ButtonComponent } from '@shared/components/button/button.component';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [
    FontAwesomeModule,
    DialogModule,
    ButtonComponent
],
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent {

  private dialogRef!: DialogRef<OutputData>;

  constructor(
    @Inject(DIALOG_DATA) data: InputData
  ){
    this.todo = data.todo;
  }

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo!: ToDo;

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }

}
