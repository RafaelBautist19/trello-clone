
import { Component } from '@angular/core';
import { BackgroundComponent } from '@auth/components/background/background.component';
import { FooterComponent } from '@auth/components/footer/footer.component';
import { HeaderComponent } from '@auth/components/header/header.component';
import { RecoveryFormComponent } from '@auth/components/recovery-form/recovery-form.component';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    RecoveryFormComponent
],
  templateUrl: './recovery.component.html'
})
export class RecoveryComponent {

}
