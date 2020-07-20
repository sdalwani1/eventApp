import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = "http://localhost/eventPageApp/index.php/api/users/";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.apiURL + '/users/').pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(Users): Observable<Users> {
    return this.httpClient.post<Users>(this.apiURL + '/users/', JSON.stringify(Users), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id): Observable<Users> {
    return this.httpClient.get<Users>(this.apiURL + '/users/' + id).pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id, users): Observable<Users> {
    return this.httpClient.put<Users>(this.apiURL + '/users/' + id, JSON.stringify(users), this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Users>(this.apiURL + '/users/' + id, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
