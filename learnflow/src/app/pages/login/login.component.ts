import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  isLoading: boolean = false;
  loginError: string = '';
  showLoginForm: boolean = true;
  authSubscription?: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  login() {
    if (this.email.invalid) {
      this.loginError = 'Létező email-t adjon meg';
      return;
    }
    
    if (this.password.invalid) {
      this.loginError = 'Érvénytelen jelszó';
      return;
    }

    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';
    
    this.isLoading = true;
    this.showLoginForm = false;
    this.loginError = '';

    this.authService.signIn(emailValue, passwordValue)
      .then(userCredential => {
        console.log('Sikeres bejelentkezés:', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Sikertelen bejelentkezés:', error);
        this.isLoading = false;
        this.showLoginForm = true;
        
        switch(error.code) {
          case 'auth/user-not-found':
            this.loginError = 'Érvénytelen email';
            break;
          case 'auth/wrong-password':
            this.loginError = 'Érvénytelen jelszó';
            break;
          case 'auth/invalid-credential':
            this.loginError = 'Hibás email vagy jelszó';
            break;
          default:
            this.loginError = 'Sikertelen hitelesítés. Próbálkozzon késöbb :D';
        }
      });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }
}