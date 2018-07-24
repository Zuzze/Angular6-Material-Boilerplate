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
    // define the base URL path of API here
    href = 'https://jsonplaceholder.typicode.com/';

    constructor(private http: HttpClient) { }

    // define specific API calls here:

    getPosts(): Observable<IPost[]> {
      return this.http.get<IPost[]>(`${this.href}posts/`);
    }

    getPost(postId: number): Observable<IPost> {
      return this.http.get<IPost>(`${this.href}posts/${postId}`);
    }
}

