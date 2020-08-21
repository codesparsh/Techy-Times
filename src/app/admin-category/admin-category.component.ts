import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  public Categories;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.allCategory().subscribe((data)=>{
      this.Categories = data;
      console.log(data);
    })
  }


}
