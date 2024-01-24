import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import {OverlayModule} from '@angular/cdk/overlay'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faBell, faCircleQuestion} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    BtnComponent,
    OverlayModule,
    FontAwesomeModule
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faCircleQuestion;

  isOpen = false;
  isOpenBody = false;

}
