import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportApiService {
  private readonly API_URL = 'http://localhost:5141/api/report'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  Create(report: any): Observable<any> {
    const endpoint = `${this.API_URL}/create`; // Define the specific endpoint for saving drafts
    return this.http.post(endpoint, report);
  }
}