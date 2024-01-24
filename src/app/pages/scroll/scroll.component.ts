import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {ScrollingModule} from '@angular/cdk/scrolling'

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ScrollingModule
  ],
  templateUrl: './scroll.component.html'
})
export default class ScrollComponent {

}
