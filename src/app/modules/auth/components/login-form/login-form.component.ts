
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,
    ButtonComponent
],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  formBuilder = inject(FormBuilder);

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.email, Validators.minLength(6)]],
  })

  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(){}

  ngOnInit(){}

  doLogin() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }

}
