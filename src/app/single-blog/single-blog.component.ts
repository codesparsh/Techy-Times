import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { HomeService } from 'src/shared/home.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  public id;
  public html;
  public title;
  public author;
  public cover;
  public tags;
  public createdAt;
  public category="";
  public relatedPosts;
  public data;
  constructor(private route:ActivatedRoute, private homeService:HomeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.singlePost();
  }

  singlePost(){
    this.homeService.getSinglePost(this.id).subscribe((data)=>{  
  
    document.getElementById('blog-content').innerHTML=data['html'];
    this.title = data['title'];
    this.author = data['author'];
    this.cover = data['cover'];
    this.tags = data['tags'];
    this.createdAt = data['createdAt'];
    this.category = data['category'];
    this.relatedPost(this.category);
    });
  }

  relatedPost(category){
    this.data = {category:category}
    
    this.homeService.getRelatedPosts(this.data).subscribe((data)=>{
      this.relatedPosts = data;   
    });
  }
}
