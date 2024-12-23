import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_URL = 'http://localhost:5141/api/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Login method
  login(username: string, password: string): Observable<any> {
    var test = 0;
    return this.http.post(`${this.API_URL}/login`, { username, password }).pipe(
      tap((response: any) => this.setToken(response.token)),
      catchError((error) => {
        console.error('Login failed', error);
        return of(null);
      })
    );
  }

  // Sign-up method
  signUp(fullName : string, username: string, email: string, password: string): Observable<any> {
    var test = 0;
    return this.http.post(`${this.API_URL}/signup`, {fullName,username, email, password }).pipe(
      tap((response: any) => {
        // Optionally set a token if the response includes one after sign-up
        if (response.token) {
          this.setToken(response.token);
        }
      }),
      catchError((error) => {
        console.error('Sign-up failed', error);
        return of(null); // Return an empty observable in case of error
      })
    );
  }

  // Method to set the token in local storage
  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Method to get the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Method to clear the token from local storage
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  // authApi.service.ts
getAvailableUsers(): Observable<any> {
  return this.http.get(`${this.API_URL}/users`).pipe(
    tap((users) => console.log('Fetched users:', users)),
    catchError((error) => {
      console.error('Failed to fetch users', error);
      return of([]); // Return empty array on error
    })
  );
}

}
