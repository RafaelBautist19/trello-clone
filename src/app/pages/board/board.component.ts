import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { Column, ToDo } from '../../models/todo.model';
import {CdkAccordionModule} from '@angular/cdk/accordion'
import {OverlayModule} from '@angular/cdk/overlay'
import {DialogModule, Dialog} from '@angular/cdk/dialog'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faEllipsis, faImages, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../components/btn/btn.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    DragDropModule,
    CdkAccordionModule,
    OverlayModule,
    FontAwesomeModule,
    BtnComponent,
    ReactiveFormsModule,
    DialogModule
  ],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Agrega estilos personalizados para la barra de desplazamiento */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      ::-webkit-scrollbar-track {
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        border-radius: 4px;
      }

      /* Agrega un efecto hover a la barra de desplazamiento */
      ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(107, 114, 128, var(--tw-bg-opacity));
      }
    `
  ]
})
export default class BoardComponent {

  ngOnInit(){}

  faEllipsis = faEllipsis;
  faClose = faClose
  faImages = faImages
  faPlus = faPlus;

  private dialog = inject(Dialog);

  columnsList : Column[] = [
    {
      title: 'To Do',
      tasks: [
        {
          id: '1',
          title: 'Task 1',
          date: new Date().toISOString()
        },
        {
          id: '2',
          title: 'Task 2',
          date: new Date().toISOString()
        },
        {
          id: '3',
          title: 'Task 3',
          date: new Date().toISOString()
        },
        {
          id: '4',
          title: 'Task 4',
          date: new Date().toISOString()
        }
      ],
      showInput:false
    },{
      title: 'In Progress',
      tasks: [],
      showInput:false
    },{
      title: 'Done',
      tasks: [],
      showInput:false
    }
  ];

  drop(event: CdkDragDrop<any[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }

  dropColumn(event: CdkDragDrop<any[]>){
    moveItemInArray(this.columnsList, event.previousIndex, event.currentIndex);
  }

  taskName = new FormControl('', [Validators.required]);
  columnName = new FormControl('', [Validators.required]);

  isColumnInputShowed = false;

  addColumn(){
    if(this.columnName.valid){
      if(this.columnName.value?.trim() != ''){
        this.columnsList.push({
          title: this.columnName.value!,
          tasks: [],
          showInput: false
        })
        this.isColumnInputShowed = !this.isColumnInputShowed
        this.columnName.reset();
      }
    }
  }

  addCard(currentColumns: number){
    if(this.taskName.valid){
      if(this.taskName.value?.trim() != ''){
        this.columnsList[currentColumns].tasks.push({
          id: '1',
          title: this.taskName.value!,
          date: new Date().toISOString()
        })
        this.columnsList[currentColumns].showInput = false;
        this.taskName.reset();
      }
    }
  }

  openDialog(task:ToDo){
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        task:task
      }
    })

    dialogRef.closed.subscribe(output => {
      console.log(output)
    })
  }

}
