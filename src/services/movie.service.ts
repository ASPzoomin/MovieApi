import { Injectable } from '@angular/core';
import { IMovie } from 'movie';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getmovies(search):Observable<IMovie[]>{
    return this.http.get<IMovie[]>(`http://www.omdbapi.com/?t=${search}&apikey=3a978def`);
  }
}
