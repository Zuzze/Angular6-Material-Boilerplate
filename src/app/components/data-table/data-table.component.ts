import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DataServiceService, IPost } from 'src/app/services/data-service.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userId', 'title'];
  data;
  pageSize = 25;
  pageIndex = 0;
  // pageEvent: PageEvent;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.dataService.getPosts(
              this.sort.active, this.sort.direction, this.paginator.pageIndex);
          }),
          map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.length;
            return data;
          }),
          catchError(() => {
            this.isLoadingResults = false;
            return observableOf([]);
          })
        ).subscribe(data => {
          this.data = data.slice(this.pageIndex + 1 * this.pageSize, this.pageIndex + 2 * this.pageSize);
        });


        /*  this.dataService.getPosts().subscribe(data => {
            console.log(data);
            this.data = data;
          }
          );*/
      }

      ngAfterViewInit() {
        setTimeout(() => this.data.paginator = this.paginator);
      }

      selectPage(pageIndex: number) {
        if (this.pageSize * pageIndex < this.resultsLength) {
          this.paginator.pageIndex = pageIndex;
          this.getPageContent(pageIndex);
        }
      }

      getPageContent(pageIndex) {
        merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.dataService.getPosts(
              this.sort.active, this.sort.direction, this.paginator.pageIndex = pageIndex);
          }),
          map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = false;
            this.resultsLength = data.length;
            return data;
          }),
          catchError(() => {
            this.isLoadingResults = false;
            return observableOf([]);
          })
        ).subscribe(data => {
          this.data = data.slice(this.pageIndex + 1 * this.pageSize, this.pageIndex + 2 * this.pageSize);
          console.log(this.data);
        });
      }
  }

