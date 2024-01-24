import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import {DIALOG_DATA, DialogModule, DialogRef} from '@angular/cdk/dialog'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { ToDo } from '../../models/todo.model';


@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    FontAwesomeModule,
    BtnComponent
  ],
  templateUrl: './task-dialog.component.html'
})
export class TaskDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  

  private dialogRef = inject(DialogRef)
  task!: ToDo; 
  
  constructor(
    @Inject(DIALOG_DATA) private data: any
  ){
    this.task = data.task;
  }

  close(){
    this.dialogRef.close();
  }
}
