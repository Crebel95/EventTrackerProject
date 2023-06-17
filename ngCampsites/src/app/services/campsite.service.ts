import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campsite } from '../models/campsite';

@Injectable({
  providedIn: 'root',
})
export class CampsiteService {
  url: string = environment.baseUrl + 'api/campsites';

  constructor(private http: HttpClient) {}

  public show(id: number): Observable<Campsite> {
    return this.http.get<Campsite>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error('Error fetching campsite');
        return throwError(() => new Error('error showing campsite: ' + err));
      })
    );
  }

  index(): Observable<Campsite[]> {
    return this.http.get<Campsite[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('Error fetching campsites');
        return throwError(() => new Error('error showing campsites: ' + err));
      })
    );
  }

  create(campsite: Campsite): Observable<Campsite> {
    return this.http.post<Campsite>(this.url, campsite).pipe(
      catchError((err: any) => {
        console.error('Error creating campsite');
        return throwError(() => new Error('error creating campsite: ' + err));
      })
    );
  }

  update(campsite: Campsite): Observable<Campsite> {
    return this.http.put<Campsite>(this.url + '/' + campsite.id, campsite).pipe(
      catchError((err: any) => {
        console.error('Error editing campsite');
        return throwError(() => new Error('error editing campsite: ' + err));
      })
    );
  }

  destroy(id: number): Observable<void> {
   return this.http.delete<void>(this.url + '/' + id).pipe(
    catchError( (err: any) => {
    console.error('Error deleting campsite');
    return throwError(
      () =>
      new Error(
        "error deleting campsite: " + err
      )
    );
  }))
  }


}
