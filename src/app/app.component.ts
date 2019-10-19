import { Component } from '@angular/core';
import { MovieService } from 'src/services/movie.service';
import { IMovie } from 'movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public movieData:IMovie[];
  name='';
  constructor(private moviee:MovieService){}
  ngOnInit() {
  }
  funFunction(e){
    if(e){
      this.moviee.getmovies(this.name)
       .subscribe(data=>{
         if(data){
           this.movieData = data;
           console.log(this.movieData)
      }
    })
    }
  }
}
