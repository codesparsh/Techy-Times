import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/home.service';
import { Home } from '../../shared/home.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  public first;
  public second;
  public third;
  constructor(public homeService:HomeService) {
    // this.homeService = homeService
   }

  ngOnInit(): void {
    this.getPopularPost();
    this.PostsList();
  }

  PostsList(){
    this.homeService.getPosts().subscribe((res)=>{
      this.homeService.Posts = res as Home[];
    })
  }
  
  getPopularPost(){
    this.homeService.getPopularPosts().subscribe((data)=>{
      console.log(data);
      this.first = data[0];
      this.second = data[1];
      this.third = data[2];
    })
  }

}
