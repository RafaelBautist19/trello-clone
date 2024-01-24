import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn.component.html'
})
export class BtnComponent {

  @Input() btnTitle!:string;
  @Input() btnType:'button'|'reset'|'submit' = 'button';
  @Input() btnColors = 'primary';

  get colors(){
    switch(this.btnColors){
      case('success'):
        return 'bg-success-600 hover:bg-success-500 text-white'
      case('danger'):
        return 'bg-danger-600 hover:bg-danger-500 text-white'
      case('primary'):
        return 'bg-primary-600 hover:bg-primary-500 text-white'
      case('gray-light'):
        return 'bg-gray-200 hover:bg-grayt-500 focus:ring-gray-50 text-gray-700'
      default:
        return 'bg-primary-600 hover:bg-primary-500'
    }
  }

}
