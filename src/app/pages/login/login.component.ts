// In src/app/pages/login/login.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // Import Router
import { AuthService } from '../../services/auth'; // Import AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  // Inject FormBuilder, AuthService, and Router
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Use the AuthService to send the data
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful!', response);
          alert('Login successful!');
          // Here you would typically navigate to a dashboard or home page
          // For now, we can just log the success.
          // this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // The error from the server is often in err.error
          alert(`Login failed: ${err.error}`);
        }
      });
    }
  }
}
