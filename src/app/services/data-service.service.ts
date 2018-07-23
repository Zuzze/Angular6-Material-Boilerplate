import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
    href = 'https://jsonplaceholder.typicode.com/';

    constructor(private http: HttpClient) { }

    getPosts(sort?: string, order?: string, page?: number): Observable<IPost> {
      const requestUrl = `${this.href}posts/`;
      console.log(this.http.get<IPost>(requestUrl));
      return this.http.get<IPost>(requestUrl);
    }
}

