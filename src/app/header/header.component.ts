import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public categories;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.allCategory().subscribe((data)=>{
        this.categories = data;
    })
  }

}
