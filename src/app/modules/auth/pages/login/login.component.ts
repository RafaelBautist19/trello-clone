
import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { LoginFormComponent } from '@auth/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent
],
  templateUrl: './login.component.html'
})
export default class LoginComponent {

}
