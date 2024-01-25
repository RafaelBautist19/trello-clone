
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CustomValidators } from '@utils/validators';
@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    FontAwesomeModule
],
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {

  private formBuilder = inject(FormBuilder)

  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  recovery() {
    if (this.form.valid) {
      // Todo
    } else {
      this.form.markAllAsTouched();
    }
  }

}
