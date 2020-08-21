import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categoryPosts;
  public category;
  constructor(private homeService:HomeService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['name'];
      this.callByCategory(this.category);
    });

  }
  callByCategory(name){
    this.homeService.categoryPosts(name).subscribe((data)=>{
      this.categoryPosts=data;
    })
  }

}
