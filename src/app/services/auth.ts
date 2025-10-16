// In src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // The base URL of our .NET API
  private apiUrl = 'http://localhost:5150/api/auth';

  // Inject the HttpClient to make API requests
  constructor(private http: HttpClient) { }

  /**
   * Sends registration data to the server.
   * @param userData The user's registration details (username, email, password).
   */
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  /**
   * Sends login credentials to the server.
   * @param credentials The user's login details (email, password).
   */
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
