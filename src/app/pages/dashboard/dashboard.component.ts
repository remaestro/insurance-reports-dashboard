import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'dashboard-cmp',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public tableData1: TableData;
    public filteredTableData: TableData;
    public isAuditor: boolean = false;
    public selectedTab: string = 'All'; // Track selected tab, default to 'All'

    constructor(private router: Router) {}

    ngOnInit() {
        // Mock data for insurance product reports
        this.tableData1 = {
            headerRow: ['Report ID', 'Product Type', 'Class of Insurance', 'Quarter', 'Status', 'Reported Claims'],
            dataRows: [
                ['RPT-101', 'Health Insurance', 'Individual Health', '2023Q1', 'Pending', '120'],
                ['RPT-102', 'Auto Insurance', 'Commercial Auto', '2023Q1', 'Draft', '45'],
                ['RPT-103', 'Property Insurance', 'Residential Property', '2023Q2', 'Approved', '78'],
                ['RPT-104', 'Life Insurance', 'Term Life', '2023Q2', 'Rejected', '200'],
                ['RPT-105', 'Health Insurance', 'Group Health', '2023Q3', 'Pending', '95'],
                ['RPT-106', 'Auto Insurance', 'Personal Auto', '2023Q3', 'Draft', '60']
            ]
        };

        // Default to show all reports
        this.filteredTableData = this.tableData1;
    }

    filterReports(status: string) {
        this.selectedTab = status; // Update the selected tab

        if (status === 'All') {
            // Show all reports
            this.filteredTableData = this.tableData1;
        } else {
            // Filter based on status
            this.filteredTableData = {
                headerRow: this.tableData1.headerRow,
                dataRows: this.tableData1.dataRows.filter(row => row[4] === status) // Assuming status is in the 5th column
            };
        }
    }

    createReport() {
        this.router.navigate(['/admin/create-report']);
      }

    approveReport() {
        console.log('Approve button clicked');
    }

    rejectReport() {
        console.log('Reject button clicked');
    }
}
