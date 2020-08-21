import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';
import { Home } from 'src/shared/home.model';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {
  public data;
  
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
    this.PostsList();    
  }

  PostsList(){
    this.homeService.getPosts().subscribe((res)=>{
      this.homeService.Posts = res as Home[];
    })
  }
  popularPost(id,val){
    this.data={id:id,popular:val}
    this.homeService.addPopularPosts(this.data).subscribe((data)=>{
      console.log(data);
    })
  }
}
