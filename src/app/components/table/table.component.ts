import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { TableDataSource } from './table-datasource';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  @Input() displayedColumns: string[];
  @Input() dataFieldNames: string[];
  @Input() columnTooltips: string[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  ngOnInit() {
    console.log(this.data);
    this.dataSource = new TableDataSource(this.paginator, this.sort, this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.data;
    this.dataSource = new TableDataSource(this.paginator, this.sort, data.currentValue);
    this.data = data.currentValue;
    console.log(this.data);
  }

}
