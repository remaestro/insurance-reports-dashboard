import { Component, Input, OnInit } from '@angular/core';

interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-table-cmp',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    @Input() tableData!: TableData; // Accepts table data as input from the parent component

    ngOnInit() {
        // Any necessary initialization logic can go here
    }
}
