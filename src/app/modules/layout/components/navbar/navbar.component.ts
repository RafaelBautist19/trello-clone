import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown, faBell, faClose, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    OverlayModule,
    ButtonComponent
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

}
