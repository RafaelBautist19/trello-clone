
import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { ForgotPasswordFormComponent } from '@auth/components/forgot-password-form/forgot-password-form.component';
import { HeaderComponent } from '@auth/components/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    BackgroundComponent,
    HeaderComponent,
    ForgotPasswordFormComponent,
    FooterComponent
],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}
