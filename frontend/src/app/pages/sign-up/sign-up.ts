import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/Auth.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../../nav-bar/nav-bar';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavBarComponent],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignupComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoginMode = true;

  showLoginPassword = false;
  showSignupPassword = false;
  showConfirmPassword = false;

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordMatchValidator });

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      control.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      control.get('confirmPassword')?.setErrors(null);
    }

    return null;
  }

  onLogin() {
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  const success = this.authService.login(email!, password!);

  if (success) {
    this.router.navigate(['/']); // homepage
  } else {
    alert('Invalid credentials');
  }
}

  onSignup() {
  if (this.signupForm.invalid) return;

  const { name, email, password } = this.signupForm.value;

  const success = this.authService.signup({
    name: name!,
    email: email!,
    password: password!,
    wishList: [],
    cartsList: []
  });

  if (success) {
    this.router.navigate(['/']);
  } else {
    alert('Email already exists');
  }
}

  // Easy getters (clean HTML)
  get lf() { return this.loginForm.controls; }
  get sf() { return this.signupForm.controls; }
}
