import { AssignedUsers } from './../models/assignedAuditors';
import { Component, OnInit } from '@angular/core';
import { AuthApiService } from '../../auth/authApi.service';
import { ReportApiService } from './report-api.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html'
})
export class CreateReportComponent implements OnInit {
  reportTitle: string = '';
  reportDescription: string = '';
  assignedModelers: AssignedUsers[] = []; // Array for multiple modelers
  assignedAuditors: AssignedUsers[] = []; // Array for multiple auditors
  availableUsers: Array<AssignedUsers> = []; // List of users from API

  searchModeler: string = ''; // Search term for modelers
  filteredModelers: Array<AssignedUsers> = []; // Filtered list of modelers

  searchAuditor: string = ''; // Search term for auditors
  filteredAuditors: Array<AssignedUsers> = []; // Filtered list of auditors

  constructor(private reportApiService : ReportApiService, private authApiService: AuthApiService) {}

  ngOnInit() {
    // Fetch users on component initialization
    this.fetchAvailableUsers();
  }

  fetchAvailableUsers() {
    this.authApiService.getAvailableUsers().subscribe(
      (users) => {
        this.availableUsers = users; // Populate dropdown with user data
      },
      (error) => {
        console.error('Failed to fetch available users:', error);
      }
    );
  }

  // Filter modelers based on search term
  filterModelers() {
    this.filteredModelers = this.availableUsers.filter((user) =>
      user.fullName.toLowerCase().includes(this.searchModeler.toLowerCase())
    );
  }

  // Add a selected modeler
  addModeler(user) {
    if (!this.assignedModelers.includes(user)) {
      this.assignedModelers.push(user);
    }
    this.searchModeler = ''; // Clear the search bar
    this.filteredModelers = []; // Clear the filtered list
  }

  // Filter auditors based on search term
  filterAuditors() {
    this.filteredAuditors = this.availableUsers.filter((user) =>
      user.fullName.toLowerCase().includes(this.searchAuditor.toLowerCase())
    );
  }

  // Add a selected auditor
  addAuditor(user) {
    if (!this.assignedAuditors.includes(user)) {
      this.assignedAuditors.push(user);
    }
    this.searchAuditor = ''; // Clear the search bar
    this.filteredAuditors = []; // Clear the filtered list
  }

  // Computed properties for semicolon-separated display
  get modelersDisplay(): string {
    return this.assignedModelers.map(a =>a.fullName).join('; ');
  }

  get auditorsDisplay(): string {
    return this.assignedAuditors.map(a =>a.fullName).join('; ');
  }

  canSave(): boolean {
    // Enable buttons only if at least one modeler and one auditor are assigned
    return this.assignedModelers.length > 0 && this.assignedAuditors.length > 0;
  }

  onSubmit() {
    console.log('Report submitted for review:', {
      title: this.reportTitle,
      description: this.reportDescription,
      modelers: this.assignedModelers,
      auditors: this.assignedAuditors
    });
  }

  saveDraft() {
    const report = {
      title: this.reportTitle,
      description: this.reportDescription,
      modelers: this.assignedModelers,
      auditors: this.assignedAuditors
    };

    this.reportApiService.Create(report).pipe(tap(
      (response) => {
        console.log('Draft saved successfully:', response);
        alert('Draft saved successfully!');
      },
      (error) => {
        console.error('Error saving draft:', error);
        alert('Failed to save draft. Please try again.');
      }
    )).subscribe();
  }
}
