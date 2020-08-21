import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/shared/home.service';
import { RestrictStrPipe } from '../restrict-str.pipe';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ RestrictStrPipe ]
})
export class SidebarComponent implements OnInit {
  public recentPosts;
  public categories;
  constructor(private homeService:HomeService,private restrictStr:RestrictStrPipe) { }

  ngOnInit(): void {
    this.homeService.recentPosts().subscribe((data)=>{
        this.recentPosts = data;
    })
    this.homeService.allCategory().subscribe((data)=>{
      this.categories = data
    })
  }


}
