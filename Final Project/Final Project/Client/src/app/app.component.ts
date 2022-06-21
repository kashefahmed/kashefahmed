import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
posts:any=[];
 constructor(private http:HttpClient){
  
  this.loadPost();
 }

 loadPost(){
  this.http
  .get('http://localhost:3000/api/post')
  .subscribe((response)=>{
    this.posts = response
  })
 }
}
