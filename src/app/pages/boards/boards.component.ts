import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGear, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule
  ],
  templateUrl: './boards.component.html'
})
export default class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

}
