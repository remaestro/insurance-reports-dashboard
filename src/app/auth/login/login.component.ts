// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from '../authApi.service';
import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginUsername: string = '';
  loginPassword: string = '';

  signUpFullName: string = ''; // New field for full name
  signUpUsername: string = '';
  signUpEmail: string = '';
  signUpPassword: string = '';
  confirmPassword: string = '';

  showLogin: boolean = true; // Control to toggle between login and sign-up forms

  constructor(private authApiService: AuthApiService, private router: Router) {}

  onLogin() {
    if (this.loginUsername && this.loginPassword) {
      const loginObserver = {
        next: (res: any) => {
          this.router.navigate(['/admin/dashboard']); // Redirect to dashboard after login
        },
        error: (error: any) => {
          console.error('Login failed', error);
        }
      };

      this.authApiService.login(this.loginUsername,this.loginPassword).subscribe(loginObserver);
    } else {
      console.error('Username and password are required.');
    }
  }

  onSignUp() {
    if (this.signUpPassword !== this.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    const signUpObserver = {
      next: (res: any) => {
        this.toggleForms();
      },
      error: (error: any) => {
        console.error('Sign-up failed', error);
      }
    };

    this.authApiService.signUp(this.signUpFullName,this.signUpUsername,this.signUpEmail,this.signUpPassword).subscribe(signUpObserver);
  }

  toggleForms() {
    this.showLogin = !this.showLogin;
  }
}
