// In src/app/pages/register/register.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth'; // Import AuthService

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  // ודא שהנתיבים האלה תואמים לשמות הקבצים החדשים
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Use the AuthService to send the data
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful!', response);
          alert('Registration successful!');
          // Navigate to the login page on success
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert(`Registration failed: ${err.error}`);
        }
      });
    }
  }
}
